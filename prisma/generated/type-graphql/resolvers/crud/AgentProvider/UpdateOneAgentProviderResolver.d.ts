import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAgentProviderArgs } from "./args/UpdateOneAgentProviderArgs";
import { AgentProvider } from "../../../models/AgentProvider";
export declare class UpdateOneAgentProviderResolver {
    updateOneAgentProvider(ctx: any, info: GraphQLResolveInfo, args: UpdateOneAgentProviderArgs): Promise<AgentProvider | null>;
}
