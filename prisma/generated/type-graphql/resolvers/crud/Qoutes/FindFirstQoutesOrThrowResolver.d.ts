import type { GraphQLResolveInfo } from "graphql";
import { FindFirstQoutesOrThrowArgs } from "./args/FindFirstQoutesOrThrowArgs";
import { Qoutes } from "../../../models/Qoutes";
export declare class FindFirstQoutesOrThrowResolver {
    findFirstQoutesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstQoutesOrThrowArgs): Promise<Qoutes | null>;
}
