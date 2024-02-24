import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProvidersScalarWhereWithAggregatesInput {
    AND?: ProvidersScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProvidersScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProvidersScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    nit?: StringWithAggregatesFilter | undefined;
    address?: StringWithAggregatesFilter | undefined;
}
