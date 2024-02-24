import { ProvidersCountOrderByAggregateInput } from "../inputs/ProvidersCountOrderByAggregateInput";
import { ProvidersMaxOrderByAggregateInput } from "../inputs/ProvidersMaxOrderByAggregateInput";
import { ProvidersMinOrderByAggregateInput } from "../inputs/ProvidersMinOrderByAggregateInput";
export declare class ProvidersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    nit?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    _count?: ProvidersCountOrderByAggregateInput | undefined;
    _max?: ProvidersMaxOrderByAggregateInput | undefined;
    _min?: ProvidersMinOrderByAggregateInput | undefined;
}
