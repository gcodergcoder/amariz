import type { GraphQLResolveInfo } from "graphql";
import { GroupByQoutesArgs } from "./args/GroupByQoutesArgs";
import { QoutesGroupBy } from "../../outputs/QoutesGroupBy";
export declare class GroupByQoutesResolver {
    groupByQoutes(ctx: any, info: GraphQLResolveInfo, args: GroupByQoutesArgs): Promise<QoutesGroupBy[]>;
}
