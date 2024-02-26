import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyQoutesDetailsArgs } from "./args/UpdateManyQoutesDetailsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyQoutesDetailsResolver {
    updateManyQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: UpdateManyQoutesDetailsArgs): Promise<AffectedRowsOutput>;
}
