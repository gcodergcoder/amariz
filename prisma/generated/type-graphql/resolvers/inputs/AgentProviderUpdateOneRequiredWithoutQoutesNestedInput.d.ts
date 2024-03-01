import { AgentProviderCreateOrConnectWithoutQoutesInput } from "../inputs/AgentProviderCreateOrConnectWithoutQoutesInput";
import { AgentProviderCreateWithoutQoutesInput } from "../inputs/AgentProviderCreateWithoutQoutesInput";
import { AgentProviderUpdateToOneWithWhereWithoutQoutesInput } from "../inputs/AgentProviderUpdateToOneWithWhereWithoutQoutesInput";
import { AgentProviderUpsertWithoutQoutesInput } from "../inputs/AgentProviderUpsertWithoutQoutesInput";
import { AgentProviderWhereUniqueInput } from "../inputs/AgentProviderWhereUniqueInput";
export declare class AgentProviderUpdateOneRequiredWithoutQoutesNestedInput {
    create?: AgentProviderCreateWithoutQoutesInput | undefined;
    connectOrCreate?: AgentProviderCreateOrConnectWithoutQoutesInput | undefined;
    upsert?: AgentProviderUpsertWithoutQoutesInput | undefined;
    connect?: AgentProviderWhereUniqueInput | undefined;
    update?: AgentProviderUpdateToOneWithWhereWithoutQoutesInput | undefined;
}
