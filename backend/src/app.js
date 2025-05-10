const express = require('express');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/paymentRoutes');
const sequelize = require('./database/db');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Autenticar la base de datos
sequelize.authenticate()
    .then(() => console.log('Conexión a SQLite exitosa'))
    .catch((error) => console.error('Error al conectar con SQLite:', error));

// Sincronizar la base de datos
sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch((error) => console.error('Error al sincronizar la base de datos:', error));

// Rutas
app.use('/payment', paymentRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});