import express from 'express';
import apiRoutes from '../routes'

const server = express();
const port = 3000;

server.use(express.json());
server.use(apiRoutes);

server.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
