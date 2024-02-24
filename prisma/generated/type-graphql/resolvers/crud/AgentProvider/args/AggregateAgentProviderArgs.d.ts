import { AgentProviderOrderByWithRelationInput } from "../../../inputs/AgentProviderOrderByWithRelationInput";
import { AgentProviderWhereInput } from "../../../inputs/AgentProviderWhereInput";
import { AgentProviderWhereUniqueInput } from "../../../inputs/AgentProviderWhereUniqueInput";
export declare class AggregateAgentProviderArgs {
    where?: AgentProviderWhereInput | undefined;
    orderBy?: AgentProviderOrderByWithRelationInput[] | undefined;
    cursor?: AgentProviderWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
