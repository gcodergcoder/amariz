import { ProvidersCreateOrConnectWithoutQuotesInput } from "../inputs/ProvidersCreateOrConnectWithoutQuotesInput";
import { ProvidersCreateWithoutQuotesInput } from "../inputs/ProvidersCreateWithoutQuotesInput";
import { ProvidersUpdateToOneWithWhereWithoutQuotesInput } from "../inputs/ProvidersUpdateToOneWithWhereWithoutQuotesInput";
import { ProvidersUpsertWithoutQuotesInput } from "../inputs/ProvidersUpsertWithoutQuotesInput";
import { ProvidersWhereUniqueInput } from "../inputs/ProvidersWhereUniqueInput";
export declare class ProvidersUpdateOneRequiredWithoutQuotesNestedInput {
    create?: ProvidersCreateWithoutQuotesInput | undefined;
    connectOrCreate?: ProvidersCreateOrConnectWithoutQuotesInput | undefined;
    upsert?: ProvidersUpsertWithoutQuotesInput | undefined;
    connect?: ProvidersWhereUniqueInput | undefined;
    update?: ProvidersUpdateToOneWithWhereWithoutQuotesInput | undefined;
}
