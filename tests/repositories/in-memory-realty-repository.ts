import { RealtyRepository } from "../../src/app/repositories/RealtyRepository";
import { Realty } from "../../src/domain/entities/realty";

export class InMemoryRealtyRepository implements RealtyRepository {
    public realtys: Realty[] = [];

    async findById(id: string): Promise<Realty | null> {
        const realty = this.realtys.find(realty => realty.id === id)

        return realty ?? null;
    }
}