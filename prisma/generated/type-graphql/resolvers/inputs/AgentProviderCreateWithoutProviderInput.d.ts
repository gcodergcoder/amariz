import { QoutesCreateNestedManyWithoutAgentProviderInput } from "../inputs/QoutesCreateNestedManyWithoutAgentProviderInput";
export declare class AgentProviderCreateWithoutProviderInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    surName: string;
    email: string;
    phone: string;
    qoutes?: QoutesCreateNestedManyWithoutAgentProviderInput | undefined;
}
