import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneQoutesDetailsArgs } from "./args/UpsertOneQoutesDetailsArgs";
import { QoutesDetails } from "../../../models/QoutesDetails";
export declare class UpsertOneQoutesDetailsResolver {
    upsertOneQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: UpsertOneQoutesDetailsArgs): Promise<QoutesDetails>;
}
