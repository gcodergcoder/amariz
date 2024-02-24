import type { GraphQLResolveInfo } from "graphql";
import { AggregateAgentProviderArgs } from "./args/AggregateAgentProviderArgs";
import { AggregateAgentProvider } from "../../outputs/AggregateAgentProvider";
export declare class AggregateAgentProviderResolver {
    aggregateAgentProvider(ctx: any, info: GraphQLResolveInfo, args: AggregateAgentProviderArgs): Promise<AggregateAgentProvider>;
}
