import { QoutesCreateManyAgentProviderInputEnvelope } from "../inputs/QoutesCreateManyAgentProviderInputEnvelope";
import { QoutesCreateOrConnectWithoutAgentProviderInput } from "../inputs/QoutesCreateOrConnectWithoutAgentProviderInput";
import { QoutesCreateWithoutAgentProviderInput } from "../inputs/QoutesCreateWithoutAgentProviderInput";
import { QoutesScalarWhereInput } from "../inputs/QoutesScalarWhereInput";
import { QoutesUpdateManyWithWhereWithoutAgentProviderInput } from "../inputs/QoutesUpdateManyWithWhereWithoutAgentProviderInput";
import { QoutesUpdateWithWhereUniqueWithoutAgentProviderInput } from "../inputs/QoutesUpdateWithWhereUniqueWithoutAgentProviderInput";
import { QoutesUpsertWithWhereUniqueWithoutAgentProviderInput } from "../inputs/QoutesUpsertWithWhereUniqueWithoutAgentProviderInput";
import { QoutesWhereUniqueInput } from "../inputs/QoutesWhereUniqueInput";
export declare class QoutesUpdateManyWithoutAgentProviderNestedInput {
    create?: QoutesCreateWithoutAgentProviderInput[] | undefined;
    connectOrCreate?: QoutesCreateOrConnectWithoutAgentProviderInput[] | undefined;
    upsert?: QoutesUpsertWithWhereUniqueWithoutAgentProviderInput[] | undefined;
    createMany?: QoutesCreateManyAgentProviderInputEnvelope | undefined;
    set?: QoutesWhereUniqueInput[] | undefined;
    disconnect?: QoutesWhereUniqueInput[] | undefined;
    delete?: QoutesWhereUniqueInput[] | undefined;
    connect?: QoutesWhereUniqueInput[] | undefined;
    update?: QoutesUpdateWithWhereUniqueWithoutAgentProviderInput[] | undefined;
    updateMany?: QoutesUpdateManyWithWhereWithoutAgentProviderInput[] | undefined;
    deleteMany?: QoutesScalarWhereInput[] | undefined;
}
