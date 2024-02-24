import { AgentProviderOrderByWithRelationInput } from "../../../inputs/AgentProviderOrderByWithRelationInput";
import { AgentProviderWhereInput } from "../../../inputs/AgentProviderWhereInput";
import { AgentProviderWhereUniqueInput } from "../../../inputs/AgentProviderWhereUniqueInput";
export declare class FindManyAgentProviderArgs {
    where?: AgentProviderWhereInput | undefined;
    orderBy?: AgentProviderOrderByWithRelationInput[] | undefined;
    cursor?: AgentProviderWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "updatedAt" | "name" | "surName" | "email" | "phone" | "providerId"> | undefined;
}
