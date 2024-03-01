import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProvidersUpdateOneRequiredWithoutQuotesNestedInput } from "../inputs/ProvidersUpdateOneRequiredWithoutQuotesNestedInput";
import { QoutesDetailsUpdateManyWithoutQoutesNestedInput } from "../inputs/QoutesDetailsUpdateManyWithoutQoutesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class QoutesUpdateWithoutAgentProviderInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    provider?: ProvidersUpdateOneRequiredWithoutQuotesNestedInput | undefined;
    qoutesDetails?: QoutesDetailsUpdateManyWithoutQoutesNestedInput | undefined;
}
