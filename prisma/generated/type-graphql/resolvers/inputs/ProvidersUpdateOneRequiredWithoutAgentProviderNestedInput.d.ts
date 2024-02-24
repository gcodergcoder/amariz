import { ProvidersCreateOrConnectWithoutAgentProviderInput } from "../inputs/ProvidersCreateOrConnectWithoutAgentProviderInput";
import { ProvidersCreateWithoutAgentProviderInput } from "../inputs/ProvidersCreateWithoutAgentProviderInput";
import { ProvidersUpdateToOneWithWhereWithoutAgentProviderInput } from "../inputs/ProvidersUpdateToOneWithWhereWithoutAgentProviderInput";
import { ProvidersUpsertWithoutAgentProviderInput } from "../inputs/ProvidersUpsertWithoutAgentProviderInput";
import { ProvidersWhereUniqueInput } from "../inputs/ProvidersWhereUniqueInput";
export declare class ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput {
    create?: ProvidersCreateWithoutAgentProviderInput | undefined;
    connectOrCreate?: ProvidersCreateOrConnectWithoutAgentProviderInput | undefined;
    upsert?: ProvidersUpsertWithoutAgentProviderInput | undefined;
    connect?: ProvidersWhereUniqueInput | undefined;
    update?: ProvidersUpdateToOneWithWhereWithoutAgentProviderInput | undefined;
}
