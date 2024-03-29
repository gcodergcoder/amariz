import { ProvidersCreateNestedOneWithoutAgentProviderInput } from "../inputs/ProvidersCreateNestedOneWithoutAgentProviderInput";
export declare class AgentProviderCreateWithoutQoutesInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    surName: string;
    email: string;
    phone: string;
    provider: ProvidersCreateNestedOneWithoutAgentProviderInput;
}
