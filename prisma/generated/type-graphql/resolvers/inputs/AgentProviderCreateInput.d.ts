import { ProvidersCreateNestedOneWithoutAgentProviderInput } from "../inputs/ProvidersCreateNestedOneWithoutAgentProviderInput";
import { QoutesCreateNestedManyWithoutAgentProviderInput } from "../inputs/QoutesCreateNestedManyWithoutAgentProviderInput";
export declare class AgentProviderCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    surName: string;
    email: string;
    phone: string;
    provider: ProvidersCreateNestedOneWithoutAgentProviderInput;
    qoutes?: QoutesCreateNestedManyWithoutAgentProviderInput | undefined;
}
