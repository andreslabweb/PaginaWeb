const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './backend/src/database/pagos.sqlite', // Ruta del archivo SQLite
});

module.exports = sequelize;