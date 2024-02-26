import type { GraphQLResolveInfo } from "graphql";
import { FindFirstQoutesArgs } from "./args/FindFirstQoutesArgs";
import { Qoutes } from "../../../models/Qoutes";
export declare class FindFirstQoutesResolver {
    findFirstQoutes(ctx: any, info: GraphQLResolveInfo, args: FindFirstQoutesArgs): Promise<Qoutes | null>;
}
