import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneQoutesArgs } from "./args/UpdateOneQoutesArgs";
import { Qoutes } from "../../../models/Qoutes";
export declare class UpdateOneQoutesResolver {
    updateOneQoutes(ctx: any, info: GraphQLResolveInfo, args: UpdateOneQoutesArgs): Promise<Qoutes | null>;
}
