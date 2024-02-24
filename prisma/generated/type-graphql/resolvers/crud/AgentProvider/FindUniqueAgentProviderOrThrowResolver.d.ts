import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAgentProviderOrThrowArgs } from "./args/FindUniqueAgentProviderOrThrowArgs";
import { AgentProvider } from "../../../models/AgentProvider";
export declare class FindUniqueAgentProviderOrThrowResolver {
    getAgentProvider(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAgentProviderOrThrowArgs): Promise<AgentProvider | null>;
}
