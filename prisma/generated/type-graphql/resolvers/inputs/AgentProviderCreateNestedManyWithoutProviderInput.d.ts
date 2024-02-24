import { AgentProviderCreateManyProviderInputEnvelope } from "../inputs/AgentProviderCreateManyProviderInputEnvelope";
import { AgentProviderCreateOrConnectWithoutProviderInput } from "../inputs/AgentProviderCreateOrConnectWithoutProviderInput";
import { AgentProviderCreateWithoutProviderInput } from "../inputs/AgentProviderCreateWithoutProviderInput";
import { AgentProviderWhereUniqueInput } from "../inputs/AgentProviderWhereUniqueInput";
export declare class AgentProviderCreateNestedManyWithoutProviderInput {
    create?: AgentProviderCreateWithoutProviderInput[] | undefined;
    connectOrCreate?: AgentProviderCreateOrConnectWithoutProviderInput[] | undefined;
    createMany?: AgentProviderCreateManyProviderInputEnvelope | undefined;
    connect?: AgentProviderWhereUniqueInput[] | undefined;
}
