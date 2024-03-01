import { QoutesCreateManyAgentProviderInputEnvelope } from "../inputs/QoutesCreateManyAgentProviderInputEnvelope";
import { QoutesCreateOrConnectWithoutAgentProviderInput } from "../inputs/QoutesCreateOrConnectWithoutAgentProviderInput";
import { QoutesCreateWithoutAgentProviderInput } from "../inputs/QoutesCreateWithoutAgentProviderInput";
import { QoutesWhereUniqueInput } from "../inputs/QoutesWhereUniqueInput";
export declare class QoutesCreateNestedManyWithoutAgentProviderInput {
    create?: QoutesCreateWithoutAgentProviderInput[] | undefined;
    connectOrCreate?: QoutesCreateOrConnectWithoutAgentProviderInput[] | undefined;
    createMany?: QoutesCreateManyAgentProviderInputEnvelope | undefined;
    connect?: QoutesWhereUniqueInput[] | undefined;
}
