import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueQoutesOrThrowArgs } from "./args/FindUniqueQoutesOrThrowArgs";
import { Qoutes } from "../../../models/Qoutes";
export declare class FindUniqueQoutesOrThrowResolver {
    findUniqueQoutesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueQoutesOrThrowArgs): Promise<Qoutes | null>;
}
