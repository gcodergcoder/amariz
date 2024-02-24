import { AgentProviderCreateManyProviderInputEnvelope } from "../inputs/AgentProviderCreateManyProviderInputEnvelope";
import { AgentProviderCreateOrConnectWithoutProviderInput } from "../inputs/AgentProviderCreateOrConnectWithoutProviderInput";
import { AgentProviderCreateWithoutProviderInput } from "../inputs/AgentProviderCreateWithoutProviderInput";
import { AgentProviderScalarWhereInput } from "../inputs/AgentProviderScalarWhereInput";
import { AgentProviderUpdateManyWithWhereWithoutProviderInput } from "../inputs/AgentProviderUpdateManyWithWhereWithoutProviderInput";
import { AgentProviderUpdateWithWhereUniqueWithoutProviderInput } from "../inputs/AgentProviderUpdateWithWhereUniqueWithoutProviderInput";
import { AgentProviderUpsertWithWhereUniqueWithoutProviderInput } from "../inputs/AgentProviderUpsertWithWhereUniqueWithoutProviderInput";
import { AgentProviderWhereUniqueInput } from "../inputs/AgentProviderWhereUniqueInput";
export declare class AgentProviderUpdateManyWithoutProviderNestedInput {
    create?: AgentProviderCreateWithoutProviderInput[] | undefined;
    connectOrCreate?: AgentProviderCreateOrConnectWithoutProviderInput[] | undefined;
    upsert?: AgentProviderUpsertWithWhereUniqueWithoutProviderInput[] | undefined;
    createMany?: AgentProviderCreateManyProviderInputEnvelope | undefined;
    set?: AgentProviderWhereUniqueInput[] | undefined;
    disconnect?: AgentProviderWhereUniqueInput[] | undefined;
    delete?: AgentProviderWhereUniqueInput[] | undefined;
    connect?: AgentProviderWhereUniqueInput[] | undefined;
    update?: AgentProviderUpdateWithWhereUniqueWithoutProviderInput[] | undefined;
    updateMany?: AgentProviderUpdateManyWithWhereWithoutProviderInput[] | undefined;
    deleteMany?: AgentProviderScalarWhereInput[] | undefined;
}
