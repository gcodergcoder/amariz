import { ProvidersCreateNestedOneWithoutQuotesInput } from "../inputs/ProvidersCreateNestedOneWithoutQuotesInput";
import { QoutesDetailsCreateNestedManyWithoutQoutesInput } from "../inputs/QoutesDetailsCreateNestedManyWithoutQoutesInput";
export declare class QoutesCreateWithoutAgentProviderInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    provider: ProvidersCreateNestedOneWithoutQuotesInput;
    qoutesDetails?: QoutesDetailsCreateNestedManyWithoutQoutesInput | undefined;
}
