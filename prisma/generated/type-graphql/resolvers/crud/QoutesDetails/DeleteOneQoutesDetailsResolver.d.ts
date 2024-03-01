import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneQoutesDetailsArgs } from "./args/DeleteOneQoutesDetailsArgs";
import { QoutesDetails } from "../../../models/QoutesDetails";
export declare class DeleteOneQoutesDetailsResolver {
    deleteOneQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: DeleteOneQoutesDetailsArgs): Promise<QoutesDetails | null>;
}
