import { AgentProviderCountAggregate } from "../outputs/AgentProviderCountAggregate";
import { AgentProviderMaxAggregate } from "../outputs/AgentProviderMaxAggregate";
import { AgentProviderMinAggregate } from "../outputs/AgentProviderMinAggregate";
export declare class AggregateAgentProvider {
    _count: AgentProviderCountAggregate | null;
    _min: AgentProviderMinAggregate | null;
    _max: AgentProviderMaxAggregate | null;
}
