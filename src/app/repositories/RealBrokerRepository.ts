// src/app/repositories/RealBrokerRepository.ts

import { Broker } from "../../domain/entities/broker";
import { BrokerRepository } from "./BrokerRepository";

export class RealBrokerRepository implements BrokerRepository {
    async findById(id: string): Promise<Broker | null> {
        
        const broker = Broker.create({
            name: 'Nome do Broker',
            creci: 12345,
            state: 'Estado',
            email: 'email@example.com'
        });
        
        return Promise.resolve(broker);
    }
}
