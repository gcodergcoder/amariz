import { QoutesCreateNestedOneWithoutQoutesDetailsInput } from "../inputs/QoutesCreateNestedOneWithoutQoutesDetailsInput";
export declare class QoutesDetailsCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description: string;
    unit: number;
    price: number;
    qoutes: QoutesCreateNestedOneWithoutQoutesDetailsInput;
}
