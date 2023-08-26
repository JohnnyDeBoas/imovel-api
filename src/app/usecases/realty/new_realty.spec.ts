import { NewRealty } from "./new_realty";

describe('Create new realty use case', () => {
    it('should be able to create a new realty', async () => {
        const sut = new NewRealty();

        const response = await sut.start({
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
        })

        expect(response).toBeTruthy()
    });
});