import type { GraphQLResolveInfo } from "graphql";
import { AggregateQoutesArgs } from "./args/AggregateQoutesArgs";
import { AggregateQoutes } from "../../outputs/AggregateQoutes";
export declare class AggregateQoutesResolver {
    aggregateQoutes(ctx: any, info: GraphQLResolveInfo, args: AggregateQoutesArgs): Promise<AggregateQoutes>;
}
