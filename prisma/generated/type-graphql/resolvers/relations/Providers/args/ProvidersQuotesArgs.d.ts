import { QoutesOrderByWithRelationInput } from "../../../inputs/QoutesOrderByWithRelationInput";
import { QoutesWhereInput } from "../../../inputs/QoutesWhereInput";
import { QoutesWhereUniqueInput } from "../../../inputs/QoutesWhereUniqueInput";
export declare class ProvidersQuotesArgs {
    where?: QoutesWhereInput | undefined;
    orderBy?: QoutesOrderByWithRelationInput[] | undefined;
    cursor?: QoutesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "updatedAt" | "providerId" | "agentProviderId"> | undefined;
}
