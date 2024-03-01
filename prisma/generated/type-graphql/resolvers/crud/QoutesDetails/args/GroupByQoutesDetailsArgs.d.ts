import { QoutesDetailsOrderByWithAggregationInput } from "../../../inputs/QoutesDetailsOrderByWithAggregationInput";
import { QoutesDetailsScalarWhereWithAggregatesInput } from "../../../inputs/QoutesDetailsScalarWhereWithAggregatesInput";
import { QoutesDetailsWhereInput } from "../../../inputs/QoutesDetailsWhereInput";
export declare class GroupByQoutesDetailsArgs {
    where?: QoutesDetailsWhereInput | undefined;
    orderBy?: QoutesDetailsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "updatedAt" | "description" | "unit" | "price" | "quotesId">;
    having?: QoutesDetailsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
