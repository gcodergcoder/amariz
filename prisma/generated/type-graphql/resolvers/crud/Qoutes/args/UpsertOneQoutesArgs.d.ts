import { QoutesCreateInput } from "../../../inputs/QoutesCreateInput";
import { QoutesUpdateInput } from "../../../inputs/QoutesUpdateInput";
import { QoutesWhereUniqueInput } from "../../../inputs/QoutesWhereUniqueInput";
export declare class UpsertOneQoutesArgs {
    where: QoutesWhereUniqueInput;
    create: QoutesCreateInput;
    update: QoutesUpdateInput;
}
