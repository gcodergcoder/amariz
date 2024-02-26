import { QoutesOrderByWithRelationInput } from "../inputs/QoutesOrderByWithRelationInput";
export declare class QoutesDetailsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    unit?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    quotesId?: "asc" | "desc" | undefined;
    qoutes?: QoutesOrderByWithRelationInput | undefined;
}
