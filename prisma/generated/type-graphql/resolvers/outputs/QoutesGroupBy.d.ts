import { QoutesCountAggregate } from "../outputs/QoutesCountAggregate";
import { QoutesMaxAggregate } from "../outputs/QoutesMaxAggregate";
import { QoutesMinAggregate } from "../outputs/QoutesMinAggregate";
export declare class QoutesGroupBy {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    providerId: string;
    agentProviderId: string;
    _count: QoutesCountAggregate | null;
    _min: QoutesMinAggregate | null;
    _max: QoutesMaxAggregate | null;
}
