import { QoutesDetailsCreateManyQoutesInputEnvelope } from "../inputs/QoutesDetailsCreateManyQoutesInputEnvelope";
import { QoutesDetailsCreateOrConnectWithoutQoutesInput } from "../inputs/QoutesDetailsCreateOrConnectWithoutQoutesInput";
import { QoutesDetailsCreateWithoutQoutesInput } from "../inputs/QoutesDetailsCreateWithoutQoutesInput";
import { QoutesDetailsWhereUniqueInput } from "../inputs/QoutesDetailsWhereUniqueInput";
export declare class QoutesDetailsCreateNestedManyWithoutQoutesInput {
    create?: QoutesDetailsCreateWithoutQoutesInput[] | undefined;
    connectOrCreate?: QoutesDetailsCreateOrConnectWithoutQoutesInput[] | undefined;
    createMany?: QoutesDetailsCreateManyQoutesInputEnvelope | undefined;
    connect?: QoutesDetailsWhereUniqueInput[] | undefined;
}
