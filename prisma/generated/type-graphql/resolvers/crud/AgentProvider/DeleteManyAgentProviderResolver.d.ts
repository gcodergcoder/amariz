import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyAgentProviderArgs } from "./args/DeleteManyAgentProviderArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAgentProviderResolver {
    deleteManyAgentProvider(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAgentProviderArgs): Promise<AffectedRowsOutput>;
}
