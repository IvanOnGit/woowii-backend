const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

// transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// route
router.post('/', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Nombre, email y mensaje son requeridos' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje:\n${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).json({ error: 'Error al enviar el correo' });
    }
    console.log('Correo enviado:', info.response);
    res.status(200).json({ message: 'Correo enviado correctamente 📩' });
  });
});

module.exports = router;