import express from 'express';
import brokerRoutes from './brokerRoutes';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.use('/broker', brokerRoutes);

router.get('/', (req, res) => {
    res.send('Rota de exemplo');
});

export default router;
