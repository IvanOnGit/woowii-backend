const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../../db');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'secret_key';
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
  
      // Inserta el nuevo usuario en la base de datos con la contraseña hash
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
            email: user.email,
            username: user.username || ""// ✅ Ahora incluimos el username
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

  db.query(
      'SELECT username, email, profile_picture, title, description, fullname FROM users WHERE id = ?',
      [userId],
      (err, results) => {
          if (err) return res.status(500).json({ message: 'Error en el servidor' });

          if (results.length === 0) {
              return res.status(404).json({ message: 'Usuario no encontrado' });
          }

          res.status(200).json(results[0]);
      }
  );
});

router.post('/update-user-info', (req, res) => {
  const { userId, title, description } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'userId es requerido' });
  }

  if (!title && !description) {
    return res.status(400).json({ message: 'Se debe proporcionar al menos title o description' });
  }

  // Create dynamic query based on provided fields
  let updateQuery = 'UPDATE users SET ';
  const queryParams = [];
  
  if (title) {
    updateQuery += 'title = ?';
    queryParams.push(title);
  }
  
  if (description) {
    if (title) updateQuery += ', ';
    updateQuery += 'description = ?';
    queryParams.push(description);
  }
  
  updateQuery += ' WHERE id = ?';
  queryParams.push(userId);

  db.query(
    updateQuery,
    queryParams,
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Error en el servidor', error: err });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.status(200).json({ message: 'Información actualizada correctamente' });
    }
  );
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
            id: company.id,  // Ahora se llama "id"
            company_first_email: company.company_first_email,
            company_username: company.company_username // Agregado a la respuesta
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

    db.query('SELECT Company_username, Company_fullname, Company_avatar FROM companies WHERE id = ?', [id], (err, results) => {
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

  router.post('/create-job', async (req, res) => {
    const authHeader = req.headers.authorization;
    console.log("📌 Header de autorización recibido:", authHeader); // 🔍 Verifica si llega el header correctamente

    if (!authHeader) {
        return res.status(401).json({ message: "Token requerido" });
    }

    const token = authHeader.split(" ")[1];
    console.log("📌 Token extraído:", token); // 🔍 Verifica si se extrae bien el token

    try {
        const decoded = jwt.verify(token, secretKey);
        console.log("✅ Token decodificado con éxito:", decoded); // 🔍 Ver si realmente se decodifica

        const companyId = decoded.id; // Aquí obtenemos la empresa autenticada
        console.log("🏢 ID de la empresa autenticada:", companyId); // 🔍 Ver si el ID es correcto

        const {
            title, salary, variable, presencial_percentage, remote_percentage,
            about_us, what_you_will_do, who_you_will_work_with, survival_kit,
            selection_process, responsibilities, indispensable, ideal, plus
        } = req.body;

        console.log("📌 Datos recibidos para crear el job:", req.body); // 🔍 Ver qué datos llegan

        if (!title || presencial_percentage === undefined || remote_percentage === undefined) {
            console.log("⚠️ Faltan campos obligatorios");
            return res.status(400).json({ message: 'Faltan campos obligatorios' });
        }

        const [result] = await db.promise().query(
            `INSERT INTO jobs (
                company_id, title, salary, variable, presencial_percentage, remote_percentage,
                about_us, what_you_will_do, who_you_will_work_with, survival_kit,
                selection_process_step1, selection_process_step2, selection_process_step3, selection_process_step4,
                responsibilities, indispensable, ideal, plus
              )
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, // ✅ 18 columnas
          
            [
              companyId,
              title,
              salary,
              variable,
              presencial_percentage,
              remote_percentage,
              about_us,
              what_you_will_do,
              who_you_will_work_with,
              JSON.stringify(survival_kit),
              selection_process[0] || null,
              selection_process[1] || null,
              selection_process[2] || null,
              selection_process[3] || null,
              JSON.stringify(responsibilities),
              JSON.stringify(indispensable),
              JSON.stringify(ideal),
              JSON.stringify(plus)
            ]
          );

        console.log("✅ Trabajo creado con ID:", result.insertId);
        res.status(201).json({ message: 'Trabajo creado con éxito', jobId: result.insertId });
    } catch (error) {
        console.error("❌ Error al verificar el token:", error.name, error.message); // 🔍 Imprime el tipo de error
        res.status(403).json({ message: `Token inválido: ${error.message}` });
    }
});


router.get('/jobs', async (req, res) => {
    try {
      const [rows] = await db.promise().query(`
        SELECT id, title, about_us, salary, survival_kit FROM jobs ORDER BY id DESC
      `);
  
      // Mapear y parsear survival_kit para cada job
      const jobsWithParsedKit = rows.map(job => ({
        ...job,
        survival_kit: tryParseJSON(job.survival_kit)
      }));
  
      res.status(200).json(jobsWithParsedKit);
  
      // Función auxiliar para parsear survival_kit
      function tryParseJSON(jsonString) {
        try {
          const onceParsed = JSON.parse(jsonString || '[]');
          return Array.isArray(onceParsed) ? onceParsed : JSON.parse(onceParsed);
        } catch (error) {
          console.error('❌ Error al parsear survival_kit:', error);
          return [];
        }
      }
  
    } catch (error) {
      console.error("❌ Error al obtener los trabajos:", error);
      res.status(500).json({ message: 'Error al obtener los trabajos' });
    }
});
  
router.get('/jobs/by-company/:companyId', async (req, res) => {
  const { companyId } = req.params;

  try {
    const [rows] = await db.promise().query(
      `SELECT id, title, about_us, salary, survival_kit FROM jobs WHERE company_id = ? ORDER BY id DESC`,
      [companyId]
    );

    const jobsWithParsedKit = rows.map(job => ({
      ...job,
      survival_kit: tryParseJSON(job.survival_kit),
    }));

    res.status(200).json(jobsWithParsedKit);

    function tryParseJSON(jsonString) {
      try {
        const onceParsed = JSON.parse(jsonString || '[]');
        return Array.isArray(onceParsed) ? onceParsed : JSON.parse(onceParsed);
      } catch (error) {
        console.error('❌ Error al parsear survival_kit:', error);
        return [];
      }
    }

  } catch (error) {
    console.error("❌ Error al obtener los trabajos de la empresa:", error);
    res.status(500).json({ message: 'Error al obtener los trabajos de la empresa' });
  }
});

router.get('/job/:jobId', async (req, res) => {
  const { jobId } = req.params;

  try {
    const [rows] = await db.promise().query(
      `SELECT * FROM jobs WHERE id = ?`,
      [jobId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Trabajo no encontrado' });
    }

    const job = rows[0];
    console.log("🔍 Trabajo crudo desde la base de datos:", job);
    // Parseamos los campos que son arrays JSON
    const parsedJob = {
      ...job,
      survival_kit: tryParseJSON(job.survival_kit),
      responsibilities: tryParseJSON(job.responsibilities),
      indispensable: tryParseJSON(job.indispensable),
      ideal: tryParseJSON(job.ideal),
      plus: tryParseJSON(job.plus),
      selection_process: [
        job.selection_process_step1,
        job.selection_process_step2,
        job.selection_process_step3,
        job.selection_process_step4
      ].filter(Boolean),
    };

    res.status(200).json(parsedJob);

    function tryParseJSON(jsonString) {
      try {
        // Si el valor es un array o un objeto ya, no lo parseamos
        if (Array.isArray(jsonString) || typeof jsonString === 'object') {
          return jsonString;
        }
    
        // Si no es un array u objeto, intentamos parsearlo como JSON
        console.log("🚨 Intentando parsear:", jsonString); // Ver qué está llegando aquí
        const onceParsed = JSON.parse(jsonString || '[]');
        return Array.isArray(onceParsed) ? onceParsed : JSON.parse(onceParsed);
      } catch (error) {
        console.error('❌ Error al parsear JSON:', error);
        return [];
      }
    }

  } catch (error) {
    console.error("❌ Error al obtener el trabajo:", error);
    res.status(500).json({ message: 'Error al obtener el trabajo' });
  }
});

router.post('/save-user-skills', async (req, res) => {
    const { userId, toolset, analysis, hardset, softset, superpower } = req.body;
  
    // Verificamos que llegue el userId
    if (!userId) {
      return res.status(400).json({ message: 'Falta el userId' });
    }
  
    try {
      const [result] = await db.promise().query(
        `UPDATE users 
         SET 
           toolset = ?, 
           analysis = ?, 
           hardset = ?, 
           softset = ?, 
           superpower = ?
         WHERE id = ?`,
        [
          JSON.stringify(toolset),
          JSON.stringify(analysis),
          JSON.stringify(hardset),
          JSON.stringify(softset),
          JSON.stringify(superpower),
          userId
        ]
      );
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      res.status(200).json({ message: 'Habilidades del usuario actualizadas con éxito' });
    } catch (error) {
      console.error("❌ Error al actualizar las habilidades del usuario:", error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
});
  
router.get('/get-user-skills', async (req, res) => {
    const { userId } = req.query;
  
    if (!userId) {
      return res.status(400).json({ message: 'Falta el userId' });
    }
  
    try {
      const [rows] = await db.promise().query(
        `SELECT toolset, analysis, hardset, softset, superpower 
         FROM users 
         WHERE id = ?`,
        [userId]
      );
  
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      // Imprimir los valores obtenidos para depuración
      console.log('Datos obtenidos:', rows[0]);
  
      // Verificar los valores antes de devolverlos, sin necesidad de parsear
      const userSkills = {
        toolset: Array.isArray(rows[0].toolset) ? rows[0].toolset : tryParseJSON(rows[0].toolset),
        analysis: Array.isArray(rows[0].analysis) ? rows[0].analysis : tryParseJSON(rows[0].analysis),
        hardset: Array.isArray(rows[0].hardset) ? rows[0].hardset : tryParseJSON(rows[0].hardset),
        softset: Array.isArray(rows[0].softset) ? rows[0].softset : tryParseJSON(rows[0].softset),
        superpower: Array.isArray(rows[0].superpower) ? rows[0].superpower : tryParseJSON(rows[0].superpower),
      };
  
      res.status(200).json(userSkills);
  
    } catch (error) {
      console.error("❌ Error al obtener las habilidades del usuario:", error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });
  
  // Función auxiliar para intentar parsear los JSON
  function tryParseJSON(jsonString) {
    try {
      console.log('Intentando parsear:', jsonString);
      return JSON.parse(jsonString || '[]');
    } catch (error) {
      console.error('Error al parsear JSON:', error);
      return [];
    }
  }
  
  router.post('/apply', (req, res) => {
    const { userId, jobId } = req.body;

    if (!userId || !jobId) {
        return res.status(400).json({ message: 'Faltan datos: userId o jobId' });
    }

    // Verificamos si ya existe una postulación
    db.query(
        `SELECT * FROM applications WHERE user_id = ? AND job_id = ?`,
        [userId, jobId],
        (err, results) => {
            if (err) {
                console.error('❌ Error al verificar postulación:', err);
                return res.status(500).json({ message: 'Error interno del servidor' });
            }

            if (results.length > 0) {
                return res.status(409).json({ message: 'Ya te postulaste a este trabajo' });
            }

            // Insertamos la nueva postulación
            db.query(
                `INSERT INTO applications (user_id, job_id, status) VALUES (?, ?, ?)`,
                [userId, jobId, 'pending'],
                (err) => {
                    if (err) {
                        console.error('❌ Error al insertar postulación:', err);
                        return res.status(500).json({ message: 'Error al guardar la postulación' });
                    }

                    res.status(201).json({ message: 'Postulación enviada con éxito' });
                }
            );
        }
    );
  });

  router.get('/has-applied', (req, res) => {
    const { userId, jobId } = req.query;

    if (!userId || !jobId) {
        return res.status(400).json({ message: 'Faltan parámetros' });
    }

    db.query(
        `SELECT * FROM applications WHERE user_id = ? AND job_id = ?`,
        [userId, jobId],
        (err, results) => {
            if (err) {
                console.error('❌ Error al verificar postulación:', err);
                return res.status(500).json({ message: 'Error del servidor' });
            }

            const alreadyApplied = results.length > 0;
            res.json({ applied: alreadyApplied });
        }
    );
  });

  router.get('/notifications', (req, res) => {
    const companyId = req.query.companyId;
  
    if (!companyId) {
      return res.status(400).json({ message: "Falta el parámetro companyId" });
    }
  
    const sql = `
      SELECT COUNT(*) AS total
      FROM applications AS a
      INNER JOIN jobs AS j ON a.job_id = j.id
      WHERE j.company_id = ? AND a.status = 'pending'
    `;
  
    db.query(sql, [companyId], (err, results) => {
      if (err) {
        console.error("Error al obtener notificaciones:", err);
        return res.status(500).json({ message: "Error al obtener notificaciones" });
      }
  
      const total = results[0]?.total || 0;
      res.json({ total });
    });
  });

  router.get('/new-applications', (req, res) => {
    const companyId = req.query.companyId;
  
    if (!companyId) {
      return res.status(400).json({ message: "Falta companyId" });
    }
  
    const sql = `
    SELECT j.title AS jobTitle
    FROM applications AS a
    INNER JOIN jobs AS j ON a.job_id = j.id
    WHERE j.company_id = ? AND a.status = 'pending'
    ORDER BY a.applied_at DESC
  `;
  
    db.query(sql, [companyId], (err, results) => {
      if (err) {
        console.error("Error al obtener nuevas postulaciones:", err);
        return res.status(500).json({ message: "Error interno" });
      }
  
      res.json(results);
    });
  });

  router.get('/candidates/by-job', (req, res) => {
    const jobId = req.query.jobId;
  
    if (!jobId) {
      return res.status(400).json({ error: 'Missing jobId in query.' });
    }
  
    const sql = `
      SELECT 
      applications.id AS applicationId,
      users.id AS userId,
      users.username,
      users.profile_picture,
      users.toolset
    FROM applications
    JOIN users ON applications.user_id = users.id
    WHERE applications.job_id = ?

    `;
  
    db.query(sql, [jobId], (err, results) => {
      if (err) {
        console.error('Error fetching candidates by job:', err);
        return res.status(500).json({ error: 'Internal server error.' });
      }
  
      res.json(results);
    });
  });

  router.patch('/applications/:id/match', (req, res) => {
    const applicationId = req.params.id;
  
    // Cambiamos 'matched' por 'status' y su valor por 'matched'
    const sql = `UPDATE applications SET status = 'matched' WHERE id = ? AND status = 'pending'`;
  
    db.query(sql, [applicationId], (err, result) => {
      if (err) {
        console.error('Error al hacer match con el candidato:', err);
        return res.status(500).json({ error: 'Error interno del servidor.' });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Aplicación no encontrada o ya fue procesada.' });
      }
  
      res.json({ success: true, message: 'Candidato aceptado correctamente.' });
    });
  });

  router.get('/user-matches', (req, res) => {
    const userId = req.query.userId;
  
    if (!userId) {
      return res.status(400).json({ error: 'Falta userId' });
    }
  
    const sql = `
      SELECT 
        a.id AS applicationId,
        c.company_fullname AS companyName,
        c.company_avatar AS companyAvatar,
        j.title AS jobTitle
      FROM applications a
      JOIN jobs j ON a.job_id = j.id
      JOIN companies c ON j.company_id = c.id
      WHERE a.user_id = ? AND a.status = 'matched' AND a.viewed = FALSE
      ORDER BY a.applied_at DESC
    `;
  
    db.query(sql, [userId], (err, results) => {
      if (err) {
        console.error('❌ Error al obtener matches del usuario:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
  
      // Solo retornamos los resultados sin marcarlos como vistos
      res.json(results);
    });
  });

  router.post('/mark-notifications-viewed', (req, res) => {
    const { userId, notificationIds } = req.body;
  
    if (!userId || !notificationIds || !notificationIds.length) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }
  
    const updateSql = `UPDATE applications SET viewed = TRUE WHERE id IN (?) AND user_id = ?`;
    
    db.query(updateSql, [notificationIds, userId], (err) => {
      if (err) {
        console.error('❌ Error al marcar notificaciones como vistas:', err);
        return res.status(500).json({ error: 'Error al actualizar notificaciones' });
      }
  
      res.json({ success: true });
    });
  });

  

module.exports = router;