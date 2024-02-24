import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAgentProviderArgs } from "./args/FindUniqueAgentProviderArgs";
import { AgentProvider } from "../../../models/AgentProvider";
export declare class FindUniqueAgentProviderResolver {
    agentProvider(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAgentProviderArgs): Promise<AgentProvider | null>;
}
