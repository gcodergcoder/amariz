import type { GraphQLResolveInfo } from "graphql";
import { CreateManyQoutesArgs } from "./args/CreateManyQoutesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyQoutesResolver {
    createManyQoutes(ctx: any, info: GraphQLResolveInfo, args: CreateManyQoutesArgs): Promise<AffectedRowsOutput>;
}
