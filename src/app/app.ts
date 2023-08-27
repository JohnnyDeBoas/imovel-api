import express from 'express';
import apiRoutes from '../routes/apiRoutes'

const app = express();
const port = 3000;

app.get('/', apiRoutes);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
