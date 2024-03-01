import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueQoutesArgs } from "./args/FindUniqueQoutesArgs";
import { Qoutes } from "../../../models/Qoutes";
export declare class FindUniqueQoutesResolver {
    findUniqueQoutes(ctx: any, info: GraphQLResolveInfo, args: FindUniqueQoutesArgs): Promise<Qoutes | null>;
}
