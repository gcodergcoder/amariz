import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProvidersScalarWhereWithAggregatesInput {
    AND?: ProvidersScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProvidersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProvidersScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    nit?: StringWithAggregatesFilter | undefined;
    addredd?: StringWithAggregatesFilter | undefined;
}
