import { AgentProviderCreateInput } from "../../../inputs/AgentProviderCreateInput";
import { AgentProviderUpdateInput } from "../../../inputs/AgentProviderUpdateInput";
import { AgentProviderWhereUniqueInput } from "../../../inputs/AgentProviderWhereUniqueInput";
export declare class UpsertOneAgentProviderArgs {
    where: AgentProviderWhereUniqueInput;
    create: AgentProviderCreateInput;
    update: AgentProviderUpdateInput;
}
