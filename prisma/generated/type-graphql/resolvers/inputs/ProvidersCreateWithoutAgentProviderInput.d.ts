import { QoutesCreateNestedManyWithoutProviderInput } from "../inputs/QoutesCreateNestedManyWithoutProviderInput";
export declare class ProvidersCreateWithoutAgentProviderInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    nit: string;
    address: string;
    quotes?: QoutesCreateNestedManyWithoutProviderInput | undefined;
}
