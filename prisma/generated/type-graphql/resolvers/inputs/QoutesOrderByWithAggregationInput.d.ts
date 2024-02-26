import { QoutesCountOrderByAggregateInput } from "../inputs/QoutesCountOrderByAggregateInput";
import { QoutesMaxOrderByAggregateInput } from "../inputs/QoutesMaxOrderByAggregateInput";
import { QoutesMinOrderByAggregateInput } from "../inputs/QoutesMinOrderByAggregateInput";
export declare class QoutesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    providerId?: "asc" | "desc" | undefined;
    agentProviderId?: "asc" | "desc" | undefined;
    _count?: QoutesCountOrderByAggregateInput | undefined;
    _max?: QoutesMaxOrderByAggregateInput | undefined;
    _min?: QoutesMinOrderByAggregateInput | undefined;
}
