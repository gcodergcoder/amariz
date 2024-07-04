import { AgentProviderUpdateOneRequiredWithoutQoutesNestedInput } from "../inputs/AgentProviderUpdateOneRequiredWithoutQoutesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProvidersUpdateOneRequiredWithoutQuotesNestedInput } from "../inputs/ProvidersUpdateOneRequiredWithoutQuotesNestedInput";
import { QoutesDetailsUpdateManyWithoutQoutesNestedInput } from "../inputs/QoutesDetailsUpdateManyWithoutQoutesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class QoutesUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    expireAt?: DateTimeFieldUpdateOperationsInput | undefined;
    provider?: ProvidersUpdateOneRequiredWithoutQuotesNestedInput | undefined;
    agentProvider?: AgentProviderUpdateOneRequiredWithoutQoutesNestedInput | undefined;
    qoutesDetails?: QoutesDetailsUpdateManyWithoutQoutesNestedInput | undefined;
}
