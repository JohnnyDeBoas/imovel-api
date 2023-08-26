import { NewBroker } from "./new_broker";

describe('Create a new broker', () => {
    it('should be able to create a new broker', async () => {
        const sut = new NewBroker();

        const response = await sut.start({
            name: "Silvana Aquino",
            creci: 12345,
            state: "SP",
            email: "teste@teste.com.br"
        })

        expect(response).toBeTruthy();
    })
})