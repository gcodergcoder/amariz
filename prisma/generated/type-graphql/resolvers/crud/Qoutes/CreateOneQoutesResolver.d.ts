import type { GraphQLResolveInfo } from "graphql";
import { CreateOneQoutesArgs } from "./args/CreateOneQoutesArgs";
import { Qoutes } from "../../../models/Qoutes";
export declare class CreateOneQoutesResolver {
    createOneQoutes(ctx: any, info: GraphQLResolveInfo, args: CreateOneQoutesArgs): Promise<Qoutes>;
}
