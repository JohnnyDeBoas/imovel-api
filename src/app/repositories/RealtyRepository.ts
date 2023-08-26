import { Realty } from "../../domain/entities/realty";

export interface RealtyRepository {
    findById(id: string): Promise <Realty | null>
}