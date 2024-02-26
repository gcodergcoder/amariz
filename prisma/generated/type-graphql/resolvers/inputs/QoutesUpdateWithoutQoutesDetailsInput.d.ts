import { AgentProviderUpdateOneRequiredWithoutQoutesNestedInput } from "../inputs/AgentProviderUpdateOneRequiredWithoutQoutesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProvidersUpdateOneRequiredWithoutQuotesNestedInput } from "../inputs/ProvidersUpdateOneRequiredWithoutQuotesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class QoutesUpdateWithoutQoutesDetailsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    provider?: ProvidersUpdateOneRequiredWithoutQuotesNestedInput | undefined;
    agentProvider?: AgentProviderUpdateOneRequiredWithoutQoutesNestedInput | undefined;
}
