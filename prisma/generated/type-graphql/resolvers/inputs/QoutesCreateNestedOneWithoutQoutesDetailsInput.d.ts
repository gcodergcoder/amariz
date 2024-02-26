import { QoutesCreateOrConnectWithoutQoutesDetailsInput } from "../inputs/QoutesCreateOrConnectWithoutQoutesDetailsInput";
import { QoutesCreateWithoutQoutesDetailsInput } from "../inputs/QoutesCreateWithoutQoutesDetailsInput";
import { QoutesWhereUniqueInput } from "../inputs/QoutesWhereUniqueInput";
export declare class QoutesCreateNestedOneWithoutQoutesDetailsInput {
    create?: QoutesCreateWithoutQoutesDetailsInput | undefined;
    connectOrCreate?: QoutesCreateOrConnectWithoutQoutesDetailsInput | undefined;
    connect?: QoutesWhereUniqueInput | undefined;
}
