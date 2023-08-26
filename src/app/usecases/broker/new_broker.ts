import { Broker } from "../../../domain/entities/broker";

type NewBrokerRequest = {
    name: string;
    creci: number;
    state: string;
    email: string;
}

export class NewBroker {
    async start({name, creci, state, email} : NewBrokerRequest){
        const broker = Broker.create({
            name,
            creci,
            state,
            email
        });

        return broker;
    }
}