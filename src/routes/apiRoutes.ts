import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Rota de exemplo');
  });

export default router;
