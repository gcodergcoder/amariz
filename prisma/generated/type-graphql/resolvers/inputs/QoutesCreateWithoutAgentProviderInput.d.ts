import { ProvidersCreateNestedOneWithoutQuotesInput } from "../inputs/ProvidersCreateNestedOneWithoutQuotesInput";
import { QoutesDetailsCreateNestedManyWithoutQoutesInput } from "../inputs/QoutesDetailsCreateNestedManyWithoutQoutesInput";
export declare class QoutesCreateWithoutAgentProviderInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    expireAt: Date;
    provider: ProvidersCreateNestedOneWithoutQuotesInput;
    qoutesDetails?: QoutesDetailsCreateNestedManyWithoutQoutesInput | undefined;
}
