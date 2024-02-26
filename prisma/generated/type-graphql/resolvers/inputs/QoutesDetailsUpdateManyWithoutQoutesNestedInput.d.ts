import { QoutesDetailsCreateManyQoutesInputEnvelope } from "../inputs/QoutesDetailsCreateManyQoutesInputEnvelope";
import { QoutesDetailsCreateOrConnectWithoutQoutesInput } from "../inputs/QoutesDetailsCreateOrConnectWithoutQoutesInput";
import { QoutesDetailsCreateWithoutQoutesInput } from "../inputs/QoutesDetailsCreateWithoutQoutesInput";
import { QoutesDetailsScalarWhereInput } from "../inputs/QoutesDetailsScalarWhereInput";
import { QoutesDetailsUpdateManyWithWhereWithoutQoutesInput } from "../inputs/QoutesDetailsUpdateManyWithWhereWithoutQoutesInput";
import { QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput } from "../inputs/QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput";
import { QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput } from "../inputs/QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput";
import { QoutesDetailsWhereUniqueInput } from "../inputs/QoutesDetailsWhereUniqueInput";
export declare class QoutesDetailsUpdateManyWithoutQoutesNestedInput {
    create?: QoutesDetailsCreateWithoutQoutesInput[] | undefined;
    connectOrCreate?: QoutesDetailsCreateOrConnectWithoutQoutesInput[] | undefined;
    upsert?: QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput[] | undefined;
    createMany?: QoutesDetailsCreateManyQoutesInputEnvelope | undefined;
    set?: QoutesDetailsWhereUniqueInput[] | undefined;
    disconnect?: QoutesDetailsWhereUniqueInput[] | undefined;
    delete?: QoutesDetailsWhereUniqueInput[] | undefined;
    connect?: QoutesDetailsWhereUniqueInput[] | undefined;
    update?: QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput[] | undefined;
    updateMany?: QoutesDetailsUpdateManyWithWhereWithoutQoutesInput[] | undefined;
    deleteMany?: QoutesDetailsScalarWhereInput[] | undefined;
}
