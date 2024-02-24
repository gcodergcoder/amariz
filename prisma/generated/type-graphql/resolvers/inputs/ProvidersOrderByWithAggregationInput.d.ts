import { ProvidersAvgOrderByAggregateInput } from "../inputs/ProvidersAvgOrderByAggregateInput";
import { ProvidersCountOrderByAggregateInput } from "../inputs/ProvidersCountOrderByAggregateInput";
import { ProvidersMaxOrderByAggregateInput } from "../inputs/ProvidersMaxOrderByAggregateInput";
import { ProvidersMinOrderByAggregateInput } from "../inputs/ProvidersMinOrderByAggregateInput";
import { ProvidersSumOrderByAggregateInput } from "../inputs/ProvidersSumOrderByAggregateInput";
export declare class ProvidersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    nit?: "asc" | "desc" | undefined;
    addredd?: "asc" | "desc" | undefined;
    _count?: ProvidersCountOrderByAggregateInput | undefined;
    _avg?: ProvidersAvgOrderByAggregateInput | undefined;
    _max?: ProvidersMaxOrderByAggregateInput | undefined;
    _min?: ProvidersMinOrderByAggregateInput | undefined;
    _sum?: ProvidersSumOrderByAggregateInput | undefined;
}
