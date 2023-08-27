import { Broker } from "../../domain/entities/broker";

export interface BrokerRepository {
    findById(id: string): Promise<Broker | null>;
}

