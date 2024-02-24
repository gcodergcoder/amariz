import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AgentProviderScalarWhereInput {
    AND?: AgentProviderScalarWhereInput[] | undefined;
    OR?: AgentProviderScalarWhereInput[] | undefined;
    NOT?: AgentProviderScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    surName?: StringFilter | undefined;
    email?: StringFilter | undefined;
    phone?: StringFilter | undefined;
    providerId?: StringFilter | undefined;
}
