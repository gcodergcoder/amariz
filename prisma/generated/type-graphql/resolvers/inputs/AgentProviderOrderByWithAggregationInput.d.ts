import { AgentProviderCountOrderByAggregateInput } from "../inputs/AgentProviderCountOrderByAggregateInput";
import { AgentProviderMaxOrderByAggregateInput } from "../inputs/AgentProviderMaxOrderByAggregateInput";
import { AgentProviderMinOrderByAggregateInput } from "../inputs/AgentProviderMinOrderByAggregateInput";
export declare class AgentProviderOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    surName?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    phone?: "asc" | "desc" | undefined;
    providerId?: "asc" | "desc" | undefined;
    _count?: AgentProviderCountOrderByAggregateInput | undefined;
    _max?: AgentProviderMaxOrderByAggregateInput | undefined;
    _min?: AgentProviderMinOrderByAggregateInput | undefined;
}
