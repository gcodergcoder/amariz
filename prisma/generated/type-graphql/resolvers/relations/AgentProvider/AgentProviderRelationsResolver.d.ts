import type { GraphQLResolveInfo } from "graphql";
import { AgentProvider } from "../../../models/AgentProvider";
import { Providers } from "../../../models/Providers";
import { Qoutes } from "../../../models/Qoutes";
import { AgentProviderQoutesArgs } from "./args/AgentProviderQoutesArgs";
export declare class AgentProviderRelationsResolver {
    provider(agentProvider: AgentProvider, ctx: any, info: GraphQLResolveInfo): Promise<Providers>;
    qoutes(agentProvider: AgentProvider, ctx: any, info: GraphQLResolveInfo, args: AgentProviderQoutesArgs): Promise<Qoutes[]>;
}
