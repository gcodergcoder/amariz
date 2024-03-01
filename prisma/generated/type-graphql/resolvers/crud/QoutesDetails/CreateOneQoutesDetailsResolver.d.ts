import type { GraphQLResolveInfo } from "graphql";
import { CreateOneQoutesDetailsArgs } from "./args/CreateOneQoutesDetailsArgs";
import { QoutesDetails } from "../../../models/QoutesDetails";
export declare class CreateOneQoutesDetailsResolver {
    createOneQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: CreateOneQoutesDetailsArgs): Promise<QoutesDetails>;
}
