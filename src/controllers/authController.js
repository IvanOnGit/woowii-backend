const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'secret_key';

// Registro de usuario
const register = (req, res) => {
    const { username, email, password, skills, profile_picture } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Nombre de usuario, email y contraseña son obligatorios' });
    }

    // Verificar si el usuario ya existe
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: err });

        if (results.length > 0) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Hashear la contraseña
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Insertar el usuario en la base de datos
        db.query(
            'INSERT INTO users (username, email, password, skills, profile_picture) VALUES (?, ?, ?, ?, ?)', 
            [username, email, hashedPassword, skills || '', profile_picture || ''], 
            (err, result) => {
                if (err) return res.status(500).json({ error: err });
                res.status(201).json({ message: 'Usuario registrado correctamente' });
            }
        );
    });
};

// Login de usuario
const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son obligatorios' });
    }

    // Buscar el usuario por email
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: err });

        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const user = results[0];

        // Verificar la contraseña
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });

        res.status(200).json({ 
            message: 'Login exitoso', 
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                skills: user.skills,
                profile_picture: user.profile_picture
            }
        });
    });
};

module.exports = { register, login };