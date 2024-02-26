import type { GraphQLResolveInfo } from "graphql";
import { FindFirstQoutesDetailsOrThrowArgs } from "./args/FindFirstQoutesDetailsOrThrowArgs";
import { QoutesDetails } from "../../../models/QoutesDetails";
export declare class FindFirstQoutesDetailsOrThrowResolver {
    findFirstQoutesDetailsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstQoutesDetailsOrThrowArgs): Promise<QoutesDetails | null>;
}
