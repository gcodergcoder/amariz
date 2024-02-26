import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class QoutesDetailsScalarWhereWithAggregatesInput {
    AND?: QoutesDetailsScalarWhereWithAggregatesInput[] | undefined;
    OR?: QoutesDetailsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: QoutesDetailsScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    unit?: IntWithAggregatesFilter | undefined;
    price?: FloatWithAggregatesFilter | undefined;
    quotesId?: StringWithAggregatesFilter | undefined;
}
