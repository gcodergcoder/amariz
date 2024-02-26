import type { GraphQLResolveInfo } from "graphql";
import { AgentProvider } from "../../../models/AgentProvider";
import { Providers } from "../../../models/Providers";
import { Qoutes } from "../../../models/Qoutes";
import { ProvidersAgentProviderArgs } from "./args/ProvidersAgentProviderArgs";
import { ProvidersQuotesArgs } from "./args/ProvidersQuotesArgs";
export declare class ProvidersRelationsResolver {
    agentProvider(providers: Providers, ctx: any, info: GraphQLResolveInfo, args: ProvidersAgentProviderArgs): Promise<AgentProvider[]>;
    quotes(providers: Providers, ctx: any, info: GraphQLResolveInfo, args: ProvidersQuotesArgs): Promise<Qoutes[]>;
}
