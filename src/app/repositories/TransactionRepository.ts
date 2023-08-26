import { Transaction } from "../../domain/entities/transaction";

export interface TransactionRepository {
    findById(id: string): Promise <Transaction | null>
}