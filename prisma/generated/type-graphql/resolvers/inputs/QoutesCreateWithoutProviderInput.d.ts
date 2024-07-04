import { AgentProviderCreateNestedOneWithoutQoutesInput } from "../inputs/AgentProviderCreateNestedOneWithoutQoutesInput";
import { QoutesDetailsCreateNestedManyWithoutQoutesInput } from "../inputs/QoutesDetailsCreateNestedManyWithoutQoutesInput";
export declare class QoutesCreateWithoutProviderInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    expireAt?: Date | undefined;
    agentProvider: AgentProviderCreateNestedOneWithoutQoutesInput;
    qoutesDetails?: QoutesDetailsCreateNestedManyWithoutQoutesInput | undefined;
}
