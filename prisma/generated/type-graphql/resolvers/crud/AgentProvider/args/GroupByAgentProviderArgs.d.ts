import { AgentProviderOrderByWithAggregationInput } from "../../../inputs/AgentProviderOrderByWithAggregationInput";
import { AgentProviderScalarWhereWithAggregatesInput } from "../../../inputs/AgentProviderScalarWhereWithAggregatesInput";
import { AgentProviderWhereInput } from "../../../inputs/AgentProviderWhereInput";
export declare class GroupByAgentProviderArgs {
    where?: AgentProviderWhereInput | undefined;
    orderBy?: AgentProviderOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "updatedAt" | "name" | "surName" | "email" | "phone" | "providerId">;
    having?: AgentProviderScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
