import { AgentProviderCreateOrConnectWithoutQoutesInput } from "../inputs/AgentProviderCreateOrConnectWithoutQoutesInput";
import { AgentProviderCreateWithoutQoutesInput } from "../inputs/AgentProviderCreateWithoutQoutesInput";
import { AgentProviderWhereUniqueInput } from "../inputs/AgentProviderWhereUniqueInput";
export declare class AgentProviderCreateNestedOneWithoutQoutesInput {
    create?: AgentProviderCreateWithoutQoutesInput | undefined;
    connectOrCreate?: AgentProviderCreateOrConnectWithoutQoutesInput | undefined;
    connect?: AgentProviderWhereUniqueInput | undefined;
}
