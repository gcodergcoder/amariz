import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class QoutesScalarWhereInput {
    AND?: QoutesScalarWhereInput[] | undefined;
    OR?: QoutesScalarWhereInput[] | undefined;
    NOT?: QoutesScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    expireAt?: DateTimeFilter | undefined;
    providerId?: StringFilter | undefined;
    agentProviderId?: StringFilter | undefined;
}
