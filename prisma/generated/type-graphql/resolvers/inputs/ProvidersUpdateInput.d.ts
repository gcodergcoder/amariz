import { AgentProviderUpdateManyWithoutProviderNestedInput } from "../inputs/AgentProviderUpdateManyWithoutProviderNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProvidersUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    nit?: StringFieldUpdateOperationsInput | undefined;
    addredd?: StringFieldUpdateOperationsInput | undefined;
    agentProvider?: AgentProviderUpdateManyWithoutProviderNestedInput | undefined;
}
