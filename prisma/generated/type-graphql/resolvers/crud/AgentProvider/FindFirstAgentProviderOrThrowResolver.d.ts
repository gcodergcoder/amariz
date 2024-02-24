import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAgentProviderOrThrowArgs } from "./args/FindFirstAgentProviderOrThrowArgs";
import { AgentProvider } from "../../../models/AgentProvider";
export declare class FindFirstAgentProviderOrThrowResolver {
    findFirstAgentProviderOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstAgentProviderOrThrowArgs): Promise<AgentProvider | null>;
}
