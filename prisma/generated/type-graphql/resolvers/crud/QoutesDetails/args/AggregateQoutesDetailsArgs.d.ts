import { QoutesDetailsOrderByWithRelationInput } from "../../../inputs/QoutesDetailsOrderByWithRelationInput";
import { QoutesDetailsWhereInput } from "../../../inputs/QoutesDetailsWhereInput";
import { QoutesDetailsWhereUniqueInput } from "../../../inputs/QoutesDetailsWhereUniqueInput";
export declare class AggregateQoutesDetailsArgs {
    where?: QoutesDetailsWhereInput | undefined;
    orderBy?: QoutesDetailsOrderByWithRelationInput[] | undefined;
    cursor?: QoutesDetailsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
