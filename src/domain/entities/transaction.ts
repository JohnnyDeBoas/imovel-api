import { Entity } from "../../../core/domain/Entity";

type TransactionProps = {
    realtyId: string;
    brokerId: string;
    type: string;
    createdAt?: Date;
};
export class Transaction extends Entity<TransactionProps> {
    private constructor(props: TransactionProps, id?: string){
        super(props, id);
    }

    static create(props: TransactionProps, id?: string) {
        const transaction = new Transaction({...props, createdAt: props.createdAt ?? new Date(),}, id);

        return transaction;
    }
}