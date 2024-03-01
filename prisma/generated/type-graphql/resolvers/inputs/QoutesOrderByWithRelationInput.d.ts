import { AgentProviderOrderByWithRelationInput } from "../inputs/AgentProviderOrderByWithRelationInput";
import { ProvidersOrderByWithRelationInput } from "../inputs/ProvidersOrderByWithRelationInput";
import { QoutesDetailsOrderByRelationAggregateInput } from "../inputs/QoutesDetailsOrderByRelationAggregateInput";
export declare class QoutesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    providerId?: "asc" | "desc" | undefined;
    agentProviderId?: "asc" | "desc" | undefined;
    provider?: ProvidersOrderByWithRelationInput | undefined;
    agentProvider?: AgentProviderOrderByWithRelationInput | undefined;
    qoutesDetails?: QoutesDetailsOrderByRelationAggregateInput | undefined;
}
