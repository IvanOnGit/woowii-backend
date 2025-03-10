// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const db = require('./db');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rutas
app.use('/api/auth', authRoutes);

// Verificar conexión a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('\x1b[32m%s\x1b[0m', '✅ Conexión a la base de datos exitosa');
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log('\n\x1b[36m%s\x1b[0m', '🚀 Servidor corriendo en http://localhost:' + port);
    console.log('\x1b[33m%s\x1b[0m', '⚡ Servidor funcionando! ⚡');
});