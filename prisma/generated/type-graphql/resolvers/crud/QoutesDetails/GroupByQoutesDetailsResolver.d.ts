import type { GraphQLResolveInfo } from "graphql";
import { GroupByQoutesDetailsArgs } from "./args/GroupByQoutesDetailsArgs";
import { QoutesDetailsGroupBy } from "../../outputs/QoutesDetailsGroupBy";
export declare class GroupByQoutesDetailsResolver {
    groupByQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: GroupByQoutesDetailsArgs): Promise<QoutesDetailsGroupBy[]>;
}
