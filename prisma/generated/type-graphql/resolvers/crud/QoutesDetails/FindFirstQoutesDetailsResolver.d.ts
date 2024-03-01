import type { GraphQLResolveInfo } from "graphql";
import { FindFirstQoutesDetailsArgs } from "./args/FindFirstQoutesDetailsArgs";
import { QoutesDetails } from "../../../models/QoutesDetails";
export declare class FindFirstQoutesDetailsResolver {
    findFirstQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: FindFirstQoutesDetailsArgs): Promise<QoutesDetails | null>;
}
