import { Entity } from "../../../core/domain/Entity";

type BrokerProps = {
    name: string;
    creci: number;
    state: string;
    email: string;
};
export class Broker extends Entity<BrokerProps> {
    private constructor(props: BrokerProps, id?: string){
        super(props, id);
    }

    static create(props: BrokerProps, id?: string) {
        const broker = new Broker(props, id);

        return broker;
    }
}