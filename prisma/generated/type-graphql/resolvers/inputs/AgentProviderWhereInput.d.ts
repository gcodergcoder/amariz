import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProvidersRelationFilter } from "../inputs/ProvidersRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AgentProviderWhereInput {
    AND?: AgentProviderWhereInput[] | undefined;
    OR?: AgentProviderWhereInput[] | undefined;
    NOT?: AgentProviderWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    surName?: StringFilter | undefined;
    email?: StringFilter | undefined;
    phone?: StringFilter | undefined;
    providerId?: StringFilter | undefined;
    provider?: ProvidersRelationFilter | undefined;
}
