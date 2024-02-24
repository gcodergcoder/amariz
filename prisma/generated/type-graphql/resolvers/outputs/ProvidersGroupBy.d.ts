import { ProvidersCountAggregate } from "../outputs/ProvidersCountAggregate";
import { ProvidersMaxAggregate } from "../outputs/ProvidersMaxAggregate";
import { ProvidersMinAggregate } from "../outputs/ProvidersMinAggregate";
export declare class ProvidersGroupBy {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    nit: string;
    address: string;
    _count: ProvidersCountAggregate | null;
    _min: ProvidersMinAggregate | null;
    _max: ProvidersMaxAggregate | null;
}
