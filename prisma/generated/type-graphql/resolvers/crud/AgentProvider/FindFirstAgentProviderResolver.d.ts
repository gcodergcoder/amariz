import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAgentProviderArgs } from "./args/FindFirstAgentProviderArgs";
import { AgentProvider } from "../../../models/AgentProvider";
export declare class FindFirstAgentProviderResolver {
    findFirstAgentProvider(ctx: any, info: GraphQLResolveInfo, args: FindFirstAgentProviderArgs): Promise<AgentProvider | null>;
}
