import { AgentProviderUpdateManyWithoutProviderNestedInput } from "../inputs/AgentProviderUpdateManyWithoutProviderNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { QoutesUpdateManyWithoutProviderNestedInput } from "../inputs/QoutesUpdateManyWithoutProviderNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProvidersUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    nit?: StringFieldUpdateOperationsInput | undefined;
    address?: StringFieldUpdateOperationsInput | undefined;
    agentProvider?: AgentProviderUpdateManyWithoutProviderNestedInput | undefined;
    quotes?: QoutesUpdateManyWithoutProviderNestedInput | undefined;
}
