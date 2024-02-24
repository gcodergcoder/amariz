import { ProvidersCreateOrConnectWithoutAgentProviderInput } from "../inputs/ProvidersCreateOrConnectWithoutAgentProviderInput";
import { ProvidersCreateWithoutAgentProviderInput } from "../inputs/ProvidersCreateWithoutAgentProviderInput";
import { ProvidersWhereUniqueInput } from "../inputs/ProvidersWhereUniqueInput";
export declare class ProvidersCreateNestedOneWithoutAgentProviderInput {
    create?: ProvidersCreateWithoutAgentProviderInput | undefined;
    connectOrCreate?: ProvidersCreateOrConnectWithoutAgentProviderInput | undefined;
    connect?: ProvidersWhereUniqueInput | undefined;
}
