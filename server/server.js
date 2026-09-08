const express = require('express');
const cors = require('cors');
const sql = require('mssql');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// SQL Server Configuration
const dbConfig = {
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || 'YourStrongPassword123',
  server: process.env.DB_SERVER || 'localhost',
  database: process.env.DB_DATABASE || 'CaseritaDB',
  port: parseInt(process.env.DB_PORT) || 1433,
  options: {
    encrypt: false, // true para Azure, false para desarrollo local
    trustServerCertificate: true // Requerido para certificados autofirmados locales
  }
};

// SQL Server Connection Pool Connection
let pool;
async function connectDB() {
  try {
    pool = await sql.connect(dbConfig);
    console.log('✅ Conectado a la base de datos SQL Server con éxito.');
  } catch (err) {
    console.error('❌ Error de conexión a SQL Server:', err.message);
    console.log('👉 Asegúrate de que SQL Server esté ejecutándose en el puerto 1433 y que el usuario y contraseña del archivo server/.env sean correctos.');
  }
}
connectDB();

// ----------------------------------------------------
// API ENDPOINTS
// ----------------------------------------------------

// 1. Obtener todos los platillos
app.get('/api/dishes', async (req, res) => {
  try {
    if (!pool) {
      return res.status(503).json({ error: 'La base de datos no está conectada' });
    }
    const result = await pool.request().query('SELECT * FROM Dishes');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error al obtener platillos:', err);
    res.status(500).json({ error: 'Error del servidor al obtener los platillos' });
  }
});

// Inicializar el Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor API corriendo en http://localhost:${PORT}`);
});
