import express from "express";
import * as httpStatus from 'http-status-codes'
import { RealBrokerRepository } from '../app/repositories/RealBrokerRepository';

const router = express.Router();
const realBrokerRepository = new RealBrokerRepository(); 

router.get('/', (req, res) => {
    res.send('Rota do broker');
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const broker = await realBrokerRepository.findById(id); 
        if (!broker) {
            return res.status(404).json({ error: 'Broker não encontrado' });
        }

        res.json(broker);
    } catch (error) {
        console.error('Erro ao buscar broker por ID:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.post('/new', async (req, res) => {
    console.log(req.body);

    res.status(httpStatus.OK).json(req.body);
})

export default router;
