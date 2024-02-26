import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyQoutesArgs } from "./args/UpdateManyQoutesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyQoutesResolver {
    updateManyQoutes(ctx: any, info: GraphQLResolveInfo, args: UpdateManyQoutesArgs): Promise<AffectedRowsOutput>;
}
