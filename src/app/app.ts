import express from 'express';
import apiRoutes from '../routes';
import 'dotenv/config';

const server = express();
const port = process.env.PORT ?? 3000;

server.use(express.json());
server.use(apiRoutes);

server.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
