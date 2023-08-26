import { Realty } from "../../../domain/entities/realty";

type NewRealtyRequest = {
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
}

export class NewRealty {
    async start({title, description, rentValue, sellValue, localiton, photos}: NewRealtyRequest ){
        const realty = Realty.create({
            title,
            description,
            rentValue,
            sellValue,
            localiton,
            photos
        });

        return realty;
    }
}