import { QoutesCreateManyProviderInputEnvelope } from "../inputs/QoutesCreateManyProviderInputEnvelope";
import { QoutesCreateOrConnectWithoutProviderInput } from "../inputs/QoutesCreateOrConnectWithoutProviderInput";
import { QoutesCreateWithoutProviderInput } from "../inputs/QoutesCreateWithoutProviderInput";
import { QoutesScalarWhereInput } from "../inputs/QoutesScalarWhereInput";
import { QoutesUpdateManyWithWhereWithoutProviderInput } from "../inputs/QoutesUpdateManyWithWhereWithoutProviderInput";
import { QoutesUpdateWithWhereUniqueWithoutProviderInput } from "../inputs/QoutesUpdateWithWhereUniqueWithoutProviderInput";
import { QoutesUpsertWithWhereUniqueWithoutProviderInput } from "../inputs/QoutesUpsertWithWhereUniqueWithoutProviderInput";
import { QoutesWhereUniqueInput } from "../inputs/QoutesWhereUniqueInput";
export declare class QoutesUpdateManyWithoutProviderNestedInput {
    create?: QoutesCreateWithoutProviderInput[] | undefined;
    connectOrCreate?: QoutesCreateOrConnectWithoutProviderInput[] | undefined;
    upsert?: QoutesUpsertWithWhereUniqueWithoutProviderInput[] | undefined;
    createMany?: QoutesCreateManyProviderInputEnvelope | undefined;
    set?: QoutesWhereUniqueInput[] | undefined;
    disconnect?: QoutesWhereUniqueInput[] | undefined;
    delete?: QoutesWhereUniqueInput[] | undefined;
    connect?: QoutesWhereUniqueInput[] | undefined;
    update?: QoutesUpdateWithWhereUniqueWithoutProviderInput[] | undefined;
    updateMany?: QoutesUpdateManyWithWhereWithoutProviderInput[] | undefined;
    deleteMany?: QoutesScalarWhereInput[] | undefined;
}
