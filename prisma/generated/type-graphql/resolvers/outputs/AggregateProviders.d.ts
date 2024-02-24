import { ProvidersCountAggregate } from "../outputs/ProvidersCountAggregate";
import { ProvidersMaxAggregate } from "../outputs/ProvidersMaxAggregate";
import { ProvidersMinAggregate } from "../outputs/ProvidersMinAggregate";
export declare class AggregateProviders {
    _count: ProvidersCountAggregate | null;
    _min: ProvidersMinAggregate | null;
    _max: ProvidersMaxAggregate | null;
}
