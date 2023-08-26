import { Entity } from "../../../core/domain/Entity";

type RealtyProps = {
    title: string;
    description: string;
    rentValue: number;
    sellValue: number;
    localiton: {
        cep: string;
        street: string;
        number: number;
        district: string;
        city: string;
        state: string;
        contry: string;
    };
    photos: string[];
    createdAt?: Date;
};
export class Realty extends Entity<RealtyProps> {
    private constructor(props: RealtyProps, id?: string){
        super(props, id);
    }

    static create(props: RealtyProps, id?: string) {
        
        const realty = new Realty({...props, createdAt: props.createdAt ?? new Date(),}, id);

        return realty;
    }
}