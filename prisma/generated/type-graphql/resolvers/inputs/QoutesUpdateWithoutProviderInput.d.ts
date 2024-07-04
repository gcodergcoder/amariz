import { AgentProviderUpdateOneRequiredWithoutQoutesNestedInput } from "../inputs/AgentProviderUpdateOneRequiredWithoutQoutesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { QoutesDetailsUpdateManyWithoutQoutesNestedInput } from "../inputs/QoutesDetailsUpdateManyWithoutQoutesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class QoutesUpdateWithoutProviderInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    expireAt?: DateTimeFieldUpdateOperationsInput | undefined;
    agentProvider?: AgentProviderUpdateOneRequiredWithoutQoutesNestedInput | undefined;
    qoutesDetails?: QoutesDetailsUpdateManyWithoutQoutesNestedInput | undefined;
}
