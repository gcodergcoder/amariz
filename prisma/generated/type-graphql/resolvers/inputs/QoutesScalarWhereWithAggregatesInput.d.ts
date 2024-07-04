import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class QoutesScalarWhereWithAggregatesInput {
    AND?: QoutesScalarWhereWithAggregatesInput[] | undefined;
    OR?: QoutesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: QoutesScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    expireAt?: DateTimeWithAggregatesFilter | undefined;
    providerId?: StringWithAggregatesFilter | undefined;
    agentProviderId?: StringWithAggregatesFilter | undefined;
}
