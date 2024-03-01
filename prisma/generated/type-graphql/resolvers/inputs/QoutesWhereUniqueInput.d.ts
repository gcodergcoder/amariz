import { AgentProviderRelationFilter } from "../inputs/AgentProviderRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProvidersRelationFilter } from "../inputs/ProvidersRelationFilter";
import { QoutesDetailsListRelationFilter } from "../inputs/QoutesDetailsListRelationFilter";
import { QoutesWhereInput } from "../inputs/QoutesWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class QoutesWhereUniqueInput {
    id?: string | undefined;
    AND?: QoutesWhereInput[] | undefined;
    OR?: QoutesWhereInput[] | undefined;
    NOT?: QoutesWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    providerId?: StringFilter | undefined;
    agentProviderId?: StringFilter | undefined;
    provider?: ProvidersRelationFilter | undefined;
    agentProvider?: AgentProviderRelationFilter | undefined;
    qoutesDetails?: QoutesDetailsListRelationFilter | undefined;
}
