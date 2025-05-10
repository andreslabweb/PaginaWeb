import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { sequelize } from './database';
import './models/User';

const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos establecida.'))
  .catch((err) => console.error('Error al conectar a la base de datos:', err));


  sequelize.sync({ force: false }) // Cambia a `true` para reiniciar las tablas
  .then(() => console.log('Base de datos sincronizada.'))
  .catch((err) => console.error('Error al sincronizar la base de datos:', err));
  
// Archivos estáticos
const publicPath = path.join(__dirname, '.../public');
app.use(express.static(publicPath));
console.log('Ruta de archivos estáticos:', publicPath);

// Ruta principal
app.get('/', (req: Request, res: Response) => {
  const indexPath = path.join(publicPath, 'index.html','Contactos.html','pago.html','Servicios.html');
  res.sendFile(indexPath, (err: Error) => {
    if (err) {
      console.error('Error al enviar index.html:', err.message);
      res.status(500).send('Error interno del servidor');
    }
  });
});

// Ruta de prueba de la base de datos
app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await sequelize.models.User.findAll();
    res.json(users);
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    res.status(500).send('Error interno del servidor');
  }
});

// Middleware de 404
app.use((req: Request, res: Response) => {
  res.status(404).send('Página no encontrada');
});

// Middleware de manejo de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.stack);
  res.status(500).send(`Error interno del servidor: ${err.message}`);
});

// Iniciar el servidor
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

export default app;