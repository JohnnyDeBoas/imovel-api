import { InMemoryBrokerRepository } from "../../../../tests/repositories/in-memory-broker-repository";
import { InMemoryRealtyRepository } from "../../../../tests/repositories/in-memory-realty-repository";
import { Broker } from "../../../domain/entities/broker";
import { Realty } from "../../../domain/entities/realty";
import { NewTransaction } from "./new_transaction"

describe('Create a new transaction use case', () => {
    it('should be able to create a new transaction', async () => {
        const brokerRepository = new InMemoryBrokerRepository;
        const realtyRepository = new InMemoryRealtyRepository;

        const broker = Broker.create({
            name: "Silvana Aquino",
            creci: 12345,
            state: "SP",
            email: "teste@teste.com.br"
        });
        
        const realty = Realty.create({
            title: 'Casa teste',
            description: 'Casa para teste',
            rentValue: 1500.00,
            sellValue: 420000.00,
            localiton: {
                cep: '99.999-999',
                street: 'Rua Vinicius de Moraes',
                number: 130,
                district: 'Lapa',
                city: 'São Paulo',
                state: 'SP',
                contry: 'Brasil'
            },
            photos: ['foto1.png', 'foto2.png']
        });

        brokerRepository.brokers.push(broker);
        realtyRepository.realtys.push(realty);

        const sut = new NewTransaction(
            brokerRepository,
            realtyRepository
        );
        
        const response = await sut.start({
            realtyId: realty.id,
            brokerId: broker.id,
            type: 'sell',
        });

        expect(response).toBeTruthy();
    })
})