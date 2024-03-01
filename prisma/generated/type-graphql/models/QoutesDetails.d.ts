import { Qoutes } from "../models/Qoutes";
export declare class QoutesDetails {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string;
    unit: number;
    price: number;
    qoutes?: Qoutes;
    quotesId: string;
}
