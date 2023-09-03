import express from "express";
import * as httpStatus from 'http-status-codes'
import { RealBrokerRepository } from '../app/repositories/RealBrokerRepository';
import {BrokerController} from './../controllers'

const router = express.Router();

const brokerController = new BrokerController();
const realBrokerRepository = new RealBrokerRepository(); 

router.get('/', (req, res) => {
    res.send('Rota do broker');
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const broker = await realBrokerRepository.findById(id); 
        if (!broker) {
            return res.status(httpStatus.NOT_FOUND).json({ error: 'Broker não encontrado' });
        }

        res.json(broker);
    } catch (error) {
        console.error('Erro ao buscar broker por ID:', error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Erro interno do servidor' });
    }
});

router.post('/', 
    async (req, res) => {
        try {
            const broker = await brokerController.create(req, res);
            res.status(httpStatus.CREATED).json(broker?.props);
            console.log(broker);

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).send();

        }
})

export default router;
