import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyAgentProviderArgs } from "./args/UpdateManyAgentProviderArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAgentProviderResolver {
    updateManyAgentProvider(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAgentProviderArgs): Promise<AffectedRowsOutput>;
}
