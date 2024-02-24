import { AgentProviderAvgOrderByAggregateInput } from "../inputs/AgentProviderAvgOrderByAggregateInput";
import { AgentProviderCountOrderByAggregateInput } from "../inputs/AgentProviderCountOrderByAggregateInput";
import { AgentProviderMaxOrderByAggregateInput } from "../inputs/AgentProviderMaxOrderByAggregateInput";
import { AgentProviderMinOrderByAggregateInput } from "../inputs/AgentProviderMinOrderByAggregateInput";
import { AgentProviderSumOrderByAggregateInput } from "../inputs/AgentProviderSumOrderByAggregateInput";
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
    _avg?: AgentProviderAvgOrderByAggregateInput | undefined;
    _max?: AgentProviderMaxOrderByAggregateInput | undefined;
    _min?: AgentProviderMinOrderByAggregateInput | undefined;
    _sum?: AgentProviderSumOrderByAggregateInput | undefined;
}
