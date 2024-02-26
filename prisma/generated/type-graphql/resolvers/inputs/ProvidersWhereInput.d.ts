import { AgentProviderListRelationFilter } from "../inputs/AgentProviderListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { QoutesListRelationFilter } from "../inputs/QoutesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProvidersWhereInput {
    AND?: ProvidersWhereInput[] | undefined;
    OR?: ProvidersWhereInput[] | undefined;
    NOT?: ProvidersWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    nit?: StringFilter | undefined;
    address?: StringFilter | undefined;
    agentProvider?: AgentProviderListRelationFilter | undefined;
    quotes?: QoutesListRelationFilter | undefined;
}
