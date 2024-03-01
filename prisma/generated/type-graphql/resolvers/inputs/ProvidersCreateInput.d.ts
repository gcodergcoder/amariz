import { AgentProviderCreateNestedManyWithoutProviderInput } from "../inputs/AgentProviderCreateNestedManyWithoutProviderInput";
import { QoutesCreateNestedManyWithoutProviderInput } from "../inputs/QoutesCreateNestedManyWithoutProviderInput";
export declare class ProvidersCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    nit: string;
    address: string;
    agentProvider?: AgentProviderCreateNestedManyWithoutProviderInput | undefined;
    quotes?: QoutesCreateNestedManyWithoutProviderInput | undefined;
}
