import type { GraphQLResolveInfo } from "graphql";
import { AgentProvider } from "../../../models/AgentProvider";
import { Providers } from "../../../models/Providers";
import { ProvidersAgentProviderArgs } from "./args/ProvidersAgentProviderArgs";
export declare class ProvidersRelationsResolver {
    agentProvider(providers: Providers, ctx: any, info: GraphQLResolveInfo, args: ProvidersAgentProviderArgs): Promise<AgentProvider[]>;
}
