import type { GraphQLResolveInfo } from "graphql";
import { FindManyQoutesArgs } from "./args/FindManyQoutesArgs";
import { Qoutes } from "../../../models/Qoutes";
export declare class FindManyQoutesResolver {
    findManyQoutes(ctx: any, info: GraphQLResolveInfo, args: FindManyQoutesArgs): Promise<Qoutes[]>;
}
