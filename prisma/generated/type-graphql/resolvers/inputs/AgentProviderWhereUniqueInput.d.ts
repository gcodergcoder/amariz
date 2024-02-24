import { AgentProviderWhereInput } from "../inputs/AgentProviderWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProvidersRelationFilter } from "../inputs/ProvidersRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AgentProviderWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    AND?: AgentProviderWhereInput[] | undefined;
    OR?: AgentProviderWhereInput[] | undefined;
    NOT?: AgentProviderWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    surName?: StringFilter | undefined;
    phone?: StringFilter | undefined;
    providerId?: StringFilter | undefined;
    provider?: ProvidersRelationFilter | undefined;
}
