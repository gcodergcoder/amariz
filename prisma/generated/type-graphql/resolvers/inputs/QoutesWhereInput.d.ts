import { AgentProviderRelationFilter } from "../inputs/AgentProviderRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProvidersRelationFilter } from "../inputs/ProvidersRelationFilter";
import { QoutesDetailsListRelationFilter } from "../inputs/QoutesDetailsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class QoutesWhereInput {
    AND?: QoutesWhereInput[] | undefined;
    OR?: QoutesWhereInput[] | undefined;
    NOT?: QoutesWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    expireAt?: DateTimeFilter | undefined;
    providerId?: StringFilter | undefined;
    agentProviderId?: StringFilter | undefined;
    provider?: ProvidersRelationFilter | undefined;
    agentProvider?: AgentProviderRelationFilter | undefined;
    qoutesDetails?: QoutesDetailsListRelationFilter | undefined;
}
