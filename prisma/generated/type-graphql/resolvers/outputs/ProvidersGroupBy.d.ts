import { ProvidersAvgAggregate } from "../outputs/ProvidersAvgAggregate";
import { ProvidersCountAggregate } from "../outputs/ProvidersCountAggregate";
import { ProvidersMaxAggregate } from "../outputs/ProvidersMaxAggregate";
import { ProvidersMinAggregate } from "../outputs/ProvidersMinAggregate";
import { ProvidersSumAggregate } from "../outputs/ProvidersSumAggregate";
export declare class ProvidersGroupBy {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    nit: string;
    addredd: string;
    _count: ProvidersCountAggregate | null;
    _avg: ProvidersAvgAggregate | null;
    _sum: ProvidersSumAggregate | null;
    _min: ProvidersMinAggregate | null;
    _max: ProvidersMaxAggregate | null;
}
