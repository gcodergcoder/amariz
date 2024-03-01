import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneQoutesArgs } from "./args/DeleteOneQoutesArgs";
import { Qoutes } from "../../../models/Qoutes";
export declare class DeleteOneQoutesResolver {
    deleteOneQoutes(ctx: any, info: GraphQLResolveInfo, args: DeleteOneQoutesArgs): Promise<Qoutes | null>;
}
