import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AgentProviderScalarWhereWithAggregatesInput {
    AND?: AgentProviderScalarWhereWithAggregatesInput[] | undefined;
    OR?: AgentProviderScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AgentProviderScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    surName?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    phone?: StringWithAggregatesFilter | undefined;
    providerId?: IntWithAggregatesFilter | undefined;
}
