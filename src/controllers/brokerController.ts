import { Request, Response } from "express";
import { Broker } from "../domain/entities/broker";

class BrokerController {
    async create(req: Request, res: Response): Promise<Broker | null> {
        const values = {
            name: "Teste",
            creci: 123,
            state: "Teste",
            email: "Teste"
        };
        const broker = Broker.create(values);

        return Promise.resolve(broker) ;
    }

    getBroker () {
        return '';
    }

    updateBroker() {
        return '';
    }

    deleteBroker() {
        return '';
    }
}

export default BrokerController;