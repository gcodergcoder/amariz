import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyQoutesArgs } from "./args/DeleteManyQoutesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyQoutesResolver {
    deleteManyQoutes(ctx: any, info: GraphQLResolveInfo, args: DeleteManyQoutesArgs): Promise<AffectedRowsOutput>;
}
