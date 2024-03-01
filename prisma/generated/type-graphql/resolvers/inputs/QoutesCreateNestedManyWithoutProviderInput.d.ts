import { QoutesCreateManyProviderInputEnvelope } from "../inputs/QoutesCreateManyProviderInputEnvelope";
import { QoutesCreateOrConnectWithoutProviderInput } from "../inputs/QoutesCreateOrConnectWithoutProviderInput";
import { QoutesCreateWithoutProviderInput } from "../inputs/QoutesCreateWithoutProviderInput";
import { QoutesWhereUniqueInput } from "../inputs/QoutesWhereUniqueInput";
export declare class QoutesCreateNestedManyWithoutProviderInput {
    create?: QoutesCreateWithoutProviderInput[] | undefined;
    connectOrCreate?: QoutesCreateOrConnectWithoutProviderInput[] | undefined;
    createMany?: QoutesCreateManyProviderInputEnvelope | undefined;
    connect?: QoutesWhereUniqueInput[] | undefined;
}
