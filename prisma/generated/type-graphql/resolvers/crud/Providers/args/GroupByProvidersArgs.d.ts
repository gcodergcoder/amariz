import { ProvidersOrderByWithAggregationInput } from "../../../inputs/ProvidersOrderByWithAggregationInput";
import { ProvidersScalarWhereWithAggregatesInput } from "../../../inputs/ProvidersScalarWhereWithAggregatesInput";
import { ProvidersWhereInput } from "../../../inputs/ProvidersWhereInput";
export declare class GroupByProvidersArgs {
    where?: ProvidersWhereInput | undefined;
    orderBy?: ProvidersOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "updatedAt" | "name" | "nit" | "address">;
    having?: ProvidersScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
