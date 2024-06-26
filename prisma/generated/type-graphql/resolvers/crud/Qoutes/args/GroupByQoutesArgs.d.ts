import { QoutesOrderByWithAggregationInput } from "../../../inputs/QoutesOrderByWithAggregationInput";
import { QoutesScalarWhereWithAggregatesInput } from "../../../inputs/QoutesScalarWhereWithAggregatesInput";
import { QoutesWhereInput } from "../../../inputs/QoutesWhereInput";
export declare class GroupByQoutesArgs {
    where?: QoutesWhereInput | undefined;
    orderBy?: QoutesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "updatedAt" | "expireAt" | "providerId" | "agentProviderId">;
    having?: QoutesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
