import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueQoutesDetailsOrThrowArgs } from "./args/FindUniqueQoutesDetailsOrThrowArgs";
import { QoutesDetails } from "../../../models/QoutesDetails";
export declare class FindUniqueQoutesDetailsOrThrowResolver {
    findUniqueQoutesDetailsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueQoutesDetailsOrThrowArgs): Promise<QoutesDetails | null>;
}
