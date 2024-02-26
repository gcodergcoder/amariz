import type { GraphQLResolveInfo } from "graphql";
import { FindManyQoutesDetailsArgs } from "./args/FindManyQoutesDetailsArgs";
import { QoutesDetails } from "../../../models/QoutesDetails";
export declare class FindManyQoutesDetailsResolver {
    findManyQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: FindManyQoutesDetailsArgs): Promise<QoutesDetails[]>;
}
