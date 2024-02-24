import type { GraphQLResolveInfo } from "graphql";
import { FindManyAgentProviderArgs } from "./args/FindManyAgentProviderArgs";
import { AgentProvider } from "../../../models/AgentProvider";
export declare class FindManyAgentProviderResolver {
    agentProviders(ctx: any, info: GraphQLResolveInfo, args: FindManyAgentProviderArgs): Promise<AgentProvider[]>;
}
