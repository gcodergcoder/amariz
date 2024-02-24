import { ProvidersOrderByWithRelationInput } from "../../../inputs/ProvidersOrderByWithRelationInput";
import { ProvidersWhereInput } from "../../../inputs/ProvidersWhereInput";
import { ProvidersWhereUniqueInput } from "../../../inputs/ProvidersWhereUniqueInput";
export declare class FindManyProvidersArgs {
    where?: ProvidersWhereInput | undefined;
    orderBy?: ProvidersOrderByWithRelationInput[] | undefined;
    cursor?: ProvidersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "updatedAt" | "name" | "nit" | "addredd"> | undefined;
}
