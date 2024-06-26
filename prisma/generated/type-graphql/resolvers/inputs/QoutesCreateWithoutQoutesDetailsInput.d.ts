import { AgentProviderCreateNestedOneWithoutQoutesInput } from "../inputs/AgentProviderCreateNestedOneWithoutQoutesInput";
import { ProvidersCreateNestedOneWithoutQuotesInput } from "../inputs/ProvidersCreateNestedOneWithoutQuotesInput";
export declare class QoutesCreateWithoutQoutesDetailsInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    expireAt: Date;
    provider: ProvidersCreateNestedOneWithoutQuotesInput;
    agentProvider: AgentProviderCreateNestedOneWithoutQoutesInput;
}
