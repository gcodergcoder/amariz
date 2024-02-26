import { ProvidersOrderByWithRelationInput } from "../inputs/ProvidersOrderByWithRelationInput";
import { QoutesOrderByRelationAggregateInput } from "../inputs/QoutesOrderByRelationAggregateInput";
export declare class AgentProviderOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    surName?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    phone?: "asc" | "desc" | undefined;
    providerId?: "asc" | "desc" | undefined;
    provider?: ProvidersOrderByWithRelationInput | undefined;
    qoutes?: QoutesOrderByRelationAggregateInput | undefined;
}
