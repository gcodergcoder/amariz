import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class QoutesDetailsScalarWhereInput {
    AND?: QoutesDetailsScalarWhereInput[] | undefined;
    OR?: QoutesDetailsScalarWhereInput[] | undefined;
    NOT?: QoutesDetailsScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    description?: StringFilter | undefined;
    unit?: IntFilter | undefined;
    price?: FloatFilter | undefined;
    quotesId?: StringFilter | undefined;
}
