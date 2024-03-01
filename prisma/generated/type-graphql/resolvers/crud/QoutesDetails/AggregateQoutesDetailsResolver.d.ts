import type { GraphQLResolveInfo } from "graphql";
import { AggregateQoutesDetailsArgs } from "./args/AggregateQoutesDetailsArgs";
import { AggregateQoutesDetails } from "../../outputs/AggregateQoutesDetails";
export declare class AggregateQoutesDetailsResolver {
    aggregateQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: AggregateQoutesDetailsArgs): Promise<AggregateQoutesDetails>;
}
