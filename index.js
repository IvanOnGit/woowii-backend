const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./src/routes/auth');
const contactRoutes = require('./src/routes/contact'); // 👉 Nuevo
const db = require('./db');
const { runMigrations } = require('./src/migrations/migrate');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Migraciones de base de datos
runMigrations();

// Middleware CORS
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware de logging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path} from IP: ${req.ip} | User-Agent: ${req.headers['user-agent']}`);
  next();
});

// Middleware de body-parser
app.use(bodyParser.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes); // 👉 Correcto

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor Woowii! 🚀');
});

// Health check
app.get('/health', (req, res) => {
  let health = 'healthy';
  let msg = 'Servidor funcionando correctamente';
  db.query('SELECT 1', (err, rows) => {
    if (err) {
      health = 'unhealthy';
      msg = 'Error, por favor revisar la base de datos';
      console.error('Error al hacer ping a la base de datos:', err);
    }
  });

  res.send({
    health: health,
    message: msg,
  });
});

// Conexión a base de datos
db.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar a la base de datos:', err);
  } else {
    console.log('\x1b[32m%s\x1b[0m', '✅ Conexión a la base de datos exitosa');
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log('\n\x1b[36m%s\x1b[0m', `🚀 Servidor corriendo en http://localhost:${port}`);
  console.log('\x1b[33m%s\x1b[0m', '⚡ Servidor funcionando! ⚡');
});