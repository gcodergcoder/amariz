import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneQoutesDetailsArgs } from "./args/UpdateOneQoutesDetailsArgs";
import { QoutesDetails } from "../../../models/QoutesDetails";
export declare class UpdateOneQoutesDetailsResolver {
    updateOneQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: UpdateOneQoutesDetailsArgs): Promise<QoutesDetails | null>;
}
