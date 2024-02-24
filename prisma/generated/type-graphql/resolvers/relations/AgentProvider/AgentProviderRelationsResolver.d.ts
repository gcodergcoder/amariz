import type { GraphQLResolveInfo } from "graphql";
import { AgentProvider } from "../../../models/AgentProvider";
import { Providers } from "../../../models/Providers";
export declare class AgentProviderRelationsResolver {
    provider(agentProvider: AgentProvider, ctx: any, info: GraphQLResolveInfo): Promise<Providers>;
}
