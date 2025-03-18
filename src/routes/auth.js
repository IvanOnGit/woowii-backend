const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../../db');
const validator = require('validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

router.post('/register', async (req, res) => {
    const { fullname, email, password } = req.body;
  
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: 'El nombre completo, correo electrónico y contraseña son requeridos' });
    }
  
    try {
      // Hashea la contraseña antes de almacenarla
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Inserta el nuevo usuario en la base de datos con la contraseña hasheada
      const [results] = await db.promise().query(
        'INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)',
        [fullname, email, hashedPassword]
      );
  
      const userId = results.insertId; // ID generado automáticamente por la base de datos
  
      res.status(201).json({ message: 'Usuario registrado con éxito', userId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al registrar el usuario' });
    }
  });

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    try {
        const [results] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const user = results[0];

        // Compara la contraseña hasheada con la proporcionada
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            return res.status(500).json({ message: 'Error en la configuración del servidor (JWT Secret missing)' });
        }

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
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

router.post('/update-avatar', async (req, res) => {
    const { userId, username, profile_picture } = req.body;

    if (!userId || !username || !profile_picture) {
        return res.status(400).json({ message: 'Usuario, avatar y nombre de usuario son requeridos' });
    }

    try {
        db.query('UPDATE users SET username = ?, profile_picture = ? WHERE id = ?', 
            [username, profile_picture, userId], 
            (err, result) => {
                if (err) return res.status(500).json({ message: 'Error al actualizar el perfil' });

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: 'Usuario no encontrado' });
                }

                res.status(200).json({ message: 'Perfil actualizado con éxito' });
            });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

module.exports = router;