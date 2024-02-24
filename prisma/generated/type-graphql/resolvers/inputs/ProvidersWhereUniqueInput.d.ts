import { AgentProviderListRelationFilter } from "../inputs/AgentProviderListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProvidersWhereInput } from "../inputs/ProvidersWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProvidersWhereUniqueInput {
    id?: number | undefined;
    AND?: ProvidersWhereInput[] | undefined;
    OR?: ProvidersWhereInput[] | undefined;
    NOT?: ProvidersWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    nit?: StringFilter | undefined;
    addredd?: StringFilter | undefined;
    agentProvider?: AgentProviderListRelationFilter | undefined;
}
