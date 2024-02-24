import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput } from "../inputs/ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AgentProviderUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    surName?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    phone?: StringFieldUpdateOperationsInput | undefined;
    provider?: ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput | undefined;
}
