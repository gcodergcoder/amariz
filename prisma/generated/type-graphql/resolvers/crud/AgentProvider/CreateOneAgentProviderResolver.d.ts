import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAgentProviderArgs } from "./args/CreateOneAgentProviderArgs";
import { AgentProvider } from "../../../models/AgentProvider";
export declare class CreateOneAgentProviderResolver {
    createOneAgentProvider(ctx: any, info: GraphQLResolveInfo, args: CreateOneAgentProviderArgs): Promise<AgentProvider>;
}
