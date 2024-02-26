import { ProvidersCreateOrConnectWithoutQuotesInput } from "../inputs/ProvidersCreateOrConnectWithoutQuotesInput";
import { ProvidersCreateWithoutQuotesInput } from "../inputs/ProvidersCreateWithoutQuotesInput";
import { ProvidersWhereUniqueInput } from "../inputs/ProvidersWhereUniqueInput";
export declare class ProvidersCreateNestedOneWithoutQuotesInput {
    create?: ProvidersCreateWithoutQuotesInput | undefined;
    connectOrCreate?: ProvidersCreateOrConnectWithoutQuotesInput | undefined;
    connect?: ProvidersWhereUniqueInput | undefined;
}
