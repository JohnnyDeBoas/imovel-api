import { Transaction } from "../../../domain/entities/transaction";
import { BrokerRepository } from "../../repositories/BrokerRepository";
import { RealtyRepository } from "../../repositories/RealtyRepository";

type NewTransactionRequest = {
    realtyId: string;
    brokerId: string;
    type: string;
}

export class NewTransaction {
    constructor(
        private brokerRepository: BrokerRepository,
        private realtyRepository: RealtyRepository
    ) {}

    async start({realtyId, brokerId, type}: NewTransactionRequest) {
        const broker = await this.brokerRepository.findById(brokerId);
        const realty = await this.realtyRepository.findById(realtyId);

        if(!broker){
            throw new Error('Broker not found')
        }

        if(!realty){
            throw new Error('Realty not found')
        }

        const transaction = Transaction.create({
            realtyId,
            brokerId,
            type
        });

        return transaction;
    }
}