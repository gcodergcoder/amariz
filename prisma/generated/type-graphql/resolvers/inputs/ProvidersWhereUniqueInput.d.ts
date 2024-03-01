import { AgentProviderListRelationFilter } from "../inputs/AgentProviderListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProvidersWhereInput } from "../inputs/ProvidersWhereInput";
import { QoutesListRelationFilter } from "../inputs/QoutesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProvidersWhereUniqueInput {
    id?: string | undefined;
    AND?: ProvidersWhereInput[] | undefined;
    OR?: ProvidersWhereInput[] | undefined;
    NOT?: ProvidersWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    nit?: StringFilter | undefined;
    address?: StringFilter | undefined;
    agentProvider?: AgentProviderListRelationFilter | undefined;
    quotes?: QoutesListRelationFilter | undefined;
}
