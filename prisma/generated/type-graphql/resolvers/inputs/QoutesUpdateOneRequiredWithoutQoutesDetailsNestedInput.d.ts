import { QoutesCreateOrConnectWithoutQoutesDetailsInput } from "../inputs/QoutesCreateOrConnectWithoutQoutesDetailsInput";
import { QoutesCreateWithoutQoutesDetailsInput } from "../inputs/QoutesCreateWithoutQoutesDetailsInput";
import { QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput } from "../inputs/QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput";
import { QoutesUpsertWithoutQoutesDetailsInput } from "../inputs/QoutesUpsertWithoutQoutesDetailsInput";
import { QoutesWhereUniqueInput } from "../inputs/QoutesWhereUniqueInput";
export declare class QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput {
    create?: QoutesCreateWithoutQoutesDetailsInput | undefined;
    connectOrCreate?: QoutesCreateOrConnectWithoutQoutesDetailsInput | undefined;
    upsert?: QoutesUpsertWithoutQoutesDetailsInput | undefined;
    connect?: QoutesWhereUniqueInput | undefined;
    update?: QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput | undefined;
}
