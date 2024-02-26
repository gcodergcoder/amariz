import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyQoutesDetailsArgs } from "./args/DeleteManyQoutesDetailsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyQoutesDetailsResolver {
    deleteManyQoutesDetails(ctx: any, info: GraphQLResolveInfo, args: DeleteManyQoutesDetailsArgs): Promise<AffectedRowsOutput>;
}
