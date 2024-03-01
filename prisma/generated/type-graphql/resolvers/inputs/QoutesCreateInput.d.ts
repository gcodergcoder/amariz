import { AgentProviderCreateNestedOneWithoutQoutesInput } from "../inputs/AgentProviderCreateNestedOneWithoutQoutesInput";
import { ProvidersCreateNestedOneWithoutQuotesInput } from "../inputs/ProvidersCreateNestedOneWithoutQuotesInput";
import { QoutesDetailsCreateNestedManyWithoutQoutesInput } from "../inputs/QoutesDetailsCreateNestedManyWithoutQoutesInput";
export declare class QoutesCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    provider: ProvidersCreateNestedOneWithoutQuotesInput;
    agentProvider: AgentProviderCreateNestedOneWithoutQoutesInput;
    qoutesDetails?: QoutesDetailsCreateNestedManyWithoutQoutesInput | undefined;
}
