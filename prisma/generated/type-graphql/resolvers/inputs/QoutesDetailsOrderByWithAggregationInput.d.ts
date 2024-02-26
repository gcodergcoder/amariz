import { QoutesDetailsAvgOrderByAggregateInput } from "../inputs/QoutesDetailsAvgOrderByAggregateInput";
import { QoutesDetailsCountOrderByAggregateInput } from "../inputs/QoutesDetailsCountOrderByAggregateInput";
import { QoutesDetailsMaxOrderByAggregateInput } from "../inputs/QoutesDetailsMaxOrderByAggregateInput";
import { QoutesDetailsMinOrderByAggregateInput } from "../inputs/QoutesDetailsMinOrderByAggregateInput";
import { QoutesDetailsSumOrderByAggregateInput } from "../inputs/QoutesDetailsSumOrderByAggregateInput";
export declare class QoutesDetailsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    unit?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    quotesId?: "asc" | "desc" | undefined;
    _count?: QoutesDetailsCountOrderByAggregateInput | undefined;
    _avg?: QoutesDetailsAvgOrderByAggregateInput | undefined;
    _max?: QoutesDetailsMaxOrderByAggregateInput | undefined;
    _min?: QoutesDetailsMinOrderByAggregateInput | undefined;
    _sum?: QoutesDetailsSumOrderByAggregateInput | undefined;
}
