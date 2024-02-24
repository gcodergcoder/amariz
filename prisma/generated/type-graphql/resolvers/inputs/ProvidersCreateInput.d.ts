import { AgentProviderCreateNestedManyWithoutProviderInput } from "../inputs/AgentProviderCreateNestedManyWithoutProviderInput";
export declare class ProvidersCreateInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    nit: string;
    addredd: string;
    agentProvider?: AgentProviderCreateNestedManyWithoutProviderInput | undefined;
}
