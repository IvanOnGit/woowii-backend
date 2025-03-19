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

router.get('/get-user', (req, res) => {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ message: 'User ID es requerido' });
    }

    db.query('SELECT username, profile_picture FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) return res.status(500).json({ message: 'Error en el servidor' });

        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(results[0]);
    });
});

router.post('/register-company', async (req, res) => {
    const { company_first_email, company_fullname, password } = req.body;

    // Validación de los campos obligatorios
    if (!company_first_email || !company_fullname || !password) {
        return res.status(400).json({ message: 'El email de la empresa, el nombre completo y la contraseña son requeridos' });
    }

    try {
        // Verificar si la empresa ya está registrada
        const [existingCompany] = await db.promise().query(
            'SELECT * FROM companies WHERE company_first_email = ?',
            [company_first_email]
        );

        if (existingCompany.length > 0) {
            return res.status(400).json({ message: 'El email de la empresa ya está registrado' });
        }

        // Hashea la contraseña de la empresa antes de almacenarla
        const hashedPassword = await bcrypt.hash(password, 10);

        // Inserta la nueva empresa en la base de datos con la contraseña hasheada
        const [results] = await db.promise().query(
            'INSERT INTO companies (company_first_email, company_fullname, password) VALUES (?, ?, ?)',
            [company_first_email, company_fullname, hashedPassword]
        );

        const companyId = results.insertId; // ID generado automáticamente por la base de datos

        res.status(201).json({ message: 'Empresa registrada con éxito', companyId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al registrar la empresa' });
    }
});

router.post('/login-company', async (req, res) => {
    const { company_first_email, password } = req.body;

    if (!company_first_email || !password) {
        return res.status(400).json({ message: 'El email de la empresa y la contraseña son requeridos' });
    }

    try {
        // Busca la empresa en la base de datos por su email
        const [results] = await db.promise().query('SELECT * FROM companies WHERE company_first_email = ?', [company_first_email]);

        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const company = results[0];

        // Compara la contraseña hasheada con la proporcionada
        const isMatch = await bcrypt.compare(password, company.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            return res.status(500).json({ message: 'Error en la configuración del servidor (JWT Secret missing)' });
        }

        const token = jwt.sign(
            { id: company.id, company_first_email: company.company_first_email },
            jwtSecret,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Login exitoso',
            token: token,
            id: company.id,  // <-- Ahora se llama "id"
            company_first_email: company.company_first_email
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

router.post('/update-avatar-company', async (req, res) => {
    const { 
      id,
      company_name, 
      admin_role, 
      company_second_email, 
      subscription, 
      employees_quantity, 
      company_address, 
      industry, 
      company_avatar, 
      website, 
      company_username 
    } = req.body;
  
    // Verificar que al menos se proporcionen el ID de la empresa y un campo para actualizar
    if (!id) {
        return res.status(400).json({ message: 'El ID es requerido' });
      }
  
    // Verificar que al menos un campo para actualizar esté presente
    if (!company_name && !admin_role && !company_second_email && !subscription && 
        !employees_quantity && !company_address && !industry && 
        !company_avatar && !website && !company_username) {
      return res.status(400).json({ message: 'Se debe proporcionar al menos un campo para actualizar' });
    }
  
    // Crear un objeto con los campos que existen en el request
    const updateFields = {};
    
    if (company_name) updateFields.company_name = company_name;
    if (admin_role) updateFields.admin_role = admin_role;
    if (company_second_email) updateFields.company_second_email = company_second_email;
    if (subscription) updateFields.subscription = subscription;
    if (employees_quantity) updateFields.employees_quantity = employees_quantity;
    if (company_address) updateFields.company_address = company_address;
    if (industry) updateFields.industry = industry;
    if (company_avatar) updateFields.company_avatar = company_avatar;
    if (website) updateFields.website = website;
    if (company_username) updateFields.company_username = company_username;
  
    // Construir la consulta SQL dinámicamente
    const fieldsToUpdate = Object.keys(updateFields);
    const placeholders = fieldsToUpdate.map(field => `${field} = ?`).join(', ');
    const values = fieldsToUpdate.map(field => updateFields[field]);
    values.push(id);
  
    const query = `UPDATE companies SET ${placeholders} WHERE id = ?`;
  
    try {
      db.query(query, values, (err, result) => {
        if (err) {
          console.error('Error en la actualización de la empresa:', err);
          return res.status(500).json({ message: 'Error al actualizar la información de la empresa' });
        }
        
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Empresa no encontrada' });
        }
        
        res.status(200).json({ message: 'Información de la empresa actualizada con éxito' });
      });
    } catch (error) {
      console.error('Error en el servidor:', error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  });


  router.get('/get-company', (req, res) => {
    const { id } = req.query; // Se mantiene 'id' en lugar de 'companyId'

    if (!id) {
        return res.status(400).json({ message: 'ID es requerido' });
    }

    console.log("ID recibido:", id);  // Log para verificar el id recibido

    db.query('SELECT Company_username, Company_avatar FROM companies WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error("Error de consulta:", err);  // Log para errores de la base de datos
            return res.status(500).json({ message: 'Error en el servidor' });
        }

        console.log("Resultados de la consulta:", results);  // Log para los resultados de la consulta

        if (results.length === 0) {
            return res.status(404).json({ message: 'Empresa no encontrada' });
        }

        res.status(200).json(results[0]);
    });
});
module.exports = router;