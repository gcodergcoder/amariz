import { QoutesDetailsAvgAggregate } from "../outputs/QoutesDetailsAvgAggregate";
import { QoutesDetailsCountAggregate } from "../outputs/QoutesDetailsCountAggregate";
import { QoutesDetailsMaxAggregate } from "../outputs/QoutesDetailsMaxAggregate";
import { QoutesDetailsMinAggregate } from "../outputs/QoutesDetailsMinAggregate";
import { QoutesDetailsSumAggregate } from "../outputs/QoutesDetailsSumAggregate";
export declare class AggregateQoutesDetails {
    _count: QoutesDetailsCountAggregate | null;
    _avg: QoutesDetailsAvgAggregate | null;
    _sum: QoutesDetailsSumAggregate | null;
    _min: QoutesDetailsMinAggregate | null;
    _max: QoutesDetailsMaxAggregate | null;
}
