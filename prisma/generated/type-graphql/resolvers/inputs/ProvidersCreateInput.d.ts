import { AgentProviderCreateNestedManyWithoutProviderInput } from "../inputs/AgentProviderCreateNestedManyWithoutProviderInput";
export declare class ProvidersCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    nit: string;
    address: string;
    agentProvider?: AgentProviderCreateNestedManyWithoutProviderInput | undefined;
}
