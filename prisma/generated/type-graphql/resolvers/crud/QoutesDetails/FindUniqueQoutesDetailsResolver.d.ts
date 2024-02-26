import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueQoutesDetailsArgs } from "./args/FindUniqueQoutesDetailsArgs";
import { QoutesDetails } from "../../../models/QoutesDetails";
export declare class FindUniqueQoutesDetailsResolver {
    findUniqueQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: FindUniqueQoutesDetailsArgs): Promise<QoutesDetails | null>;
}
