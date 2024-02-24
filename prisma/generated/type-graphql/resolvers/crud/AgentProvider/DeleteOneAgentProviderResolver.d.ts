import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneAgentProviderArgs } from "./args/DeleteOneAgentProviderArgs";
import { AgentProvider } from "../../../models/AgentProvider";
export declare class DeleteOneAgentProviderResolver {
    deleteOneAgentProvider(ctx: any, info: GraphQLResolveInfo, args: DeleteOneAgentProviderArgs): Promise<AgentProvider | null>;
}
