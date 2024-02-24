import { AgentProviderOrderByRelationAggregateInput } from "../inputs/AgentProviderOrderByRelationAggregateInput";
export declare class ProvidersOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    nit?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    agentProvider?: AgentProviderOrderByRelationAggregateInput | undefined;
}
