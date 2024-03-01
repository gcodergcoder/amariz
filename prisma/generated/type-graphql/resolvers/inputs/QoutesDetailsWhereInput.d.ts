import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { QoutesRelationFilter } from "../inputs/QoutesRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class QoutesDetailsWhereInput {
    AND?: QoutesDetailsWhereInput[] | undefined;
    OR?: QoutesDetailsWhereInput[] | undefined;
    NOT?: QoutesDetailsWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    description?: StringFilter | undefined;
    unit?: IntFilter | undefined;
    price?: FloatFilter | undefined;
    quotesId?: StringFilter | undefined;
    qoutes?: QoutesRelationFilter | undefined;
}
