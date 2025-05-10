"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Servir archivos estáticos (HTML, CSS, imágenes, etc.)
const publicPath = path_1.default.join(__dirname, '../public'); // Ajuste para TypeScript compilado
app.use(express_1.default.static(publicPath));
console.log('Ruta de archivos estáticos:', publicPath);
// Ruta principal
app.get('/', (req, res) => {
    const indexPath = path_1.default.join(publicPath, 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error al enviar index.html:', err.message);
            res.status(500).send('Error interno del servidor');
        }
    });
});
// Middleware para manejar rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
});
// Middleware para manejar errores generales
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).send('Error interno del servidor');
});
// Sincronizar base de datos
sequelize.sync({ force: false }) // Cambia a `true` solo si necesitas reiniciar las tablas
  .then(() => console.log('Base de datos sincronizada.'))
  .catch((err) => console.error('Error al sincronizar la base de datos:', err));
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
