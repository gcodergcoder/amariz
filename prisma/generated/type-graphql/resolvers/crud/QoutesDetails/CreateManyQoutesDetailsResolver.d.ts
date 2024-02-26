import type { GraphQLResolveInfo } from "graphql";
import { CreateManyQoutesDetailsArgs } from "./args/CreateManyQoutesDetailsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyQoutesDetailsResolver {
    createManyQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: CreateManyQoutesDetailsArgs): Promise<AffectedRowsOutput>;
}
