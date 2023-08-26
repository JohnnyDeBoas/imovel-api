import { BrokerRepository } from "../../src/app/repositories/BrokerRepository";
import { Broker } from "../../src/domain/entities/broker";

export class InMemoryBrokerRepository implements BrokerRepository {
    public brokers: Broker[] = []

    async findById(id: string): Promise<Broker | null> {
        const broker = this.brokers.find(broker => broker.id === id)

        return broker ?? null;
    }
}