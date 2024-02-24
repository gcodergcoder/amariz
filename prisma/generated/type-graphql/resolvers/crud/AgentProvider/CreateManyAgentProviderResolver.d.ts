import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAgentProviderArgs } from "./args/CreateManyAgentProviderArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAgentProviderResolver {
    createManyAgentProvider(ctx: any, info: GraphQLResolveInfo, args: CreateManyAgentProviderArgs): Promise<AffectedRowsOutput>;
}
