import type { GraphQLResolveInfo } from "graphql";
import { GroupByAgentProviderArgs } from "./args/GroupByAgentProviderArgs";
import { AgentProviderGroupBy } from "../../outputs/AgentProviderGroupBy";
export declare class GroupByAgentProviderResolver {
    groupByAgentProvider(ctx: any, info: GraphQLResolveInfo, args: GroupByAgentProviderArgs): Promise<AgentProviderGroupBy[]>;
}
