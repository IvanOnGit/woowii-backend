const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../../db');
const validator = require('validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password, skills, profile_picture } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Usuario, email y contraseña son requeridos' });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Formato de correo electrónico inválido' });
    }

    try {
        db.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], async (err, results) => {
            if (err) return res.status(500).json({ message: 'Error en el servidor' });

            if (results.length > 0) {
                return res.status(409).json({ message: 'El usuario o el correo ya existen' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            db.query('INSERT INTO users (username, email, password, skills, profile_picture) VALUES (?, ?, ?, ?, ?)', 
                [username, email, hashedPassword, skills || '', profile_picture || ''], 
                (err) => {
                    if (err) return res.status(500).json({ message: 'Error al registrar usuario' });

                    res.status(201).json({ message: 'Usuario registrado con éxito' });
                });
        });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {  // Cambié 'username' a 'email'
        if (err) return res.status(500).json({ message: 'Error en el servidor' });

        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const jwtSecret = process.env.JWT_SECRET;

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            jwtSecret,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Login exitoso',
            token: token,
            userId: user.id,
            email: user.email 
        });
    });
});

router.post('/update-avatar', async (req, res) => {
    const { userId, profile_picture } = req.body;

    if (!userId || !profile_picture) {
        return res.status(400).json({ message: "ID de usuario y avatar requeridos" });
    }

    try {
        db.query('UPDATE users SET profile_picture = ? WHERE id = ?', [profile_picture, userId], (err, result) => {
            if (err) return res.status(500).json({ message: "Error al actualizar el avatar" });

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }

            res.status(200).json({ message: "Avatar actualizado con éxito" });
        });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
});

module.exports = router;