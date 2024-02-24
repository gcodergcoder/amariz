import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAgentProviderArgs } from "./args/UpsertOneAgentProviderArgs";
import { AgentProvider } from "../../../models/AgentProvider";
export declare class UpsertOneAgentProviderResolver {
    upsertOneAgentProvider(ctx: any, info: GraphQLResolveInfo, args: UpsertOneAgentProviderArgs): Promise<AgentProvider>;
}
