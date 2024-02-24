import { AgentProviderListRelationFilter } from "../inputs/AgentProviderListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProvidersWhereInput {
    AND?: ProvidersWhereInput[] | undefined;
    OR?: ProvidersWhereInput[] | undefined;
    NOT?: ProvidersWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    nit?: StringFilter | undefined;
    addredd?: StringFilter | undefined;
    agentProvider?: AgentProviderListRelationFilter | undefined;
}
