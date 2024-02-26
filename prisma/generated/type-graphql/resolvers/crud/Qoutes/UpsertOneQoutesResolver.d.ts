import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneQoutesArgs } from "./args/UpsertOneQoutesArgs";
import { Qoutes } from "../../../models/Qoutes";
export declare class UpsertOneQoutesResolver {
    upsertOneQoutes(ctx: any, info: GraphQLResolveInfo, args: UpsertOneQoutesArgs): Promise<Qoutes>;
}
