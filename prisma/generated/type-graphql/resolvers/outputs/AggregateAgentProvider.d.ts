import { AgentProviderAvgAggregate } from "../outputs/AgentProviderAvgAggregate";
import { AgentProviderCountAggregate } from "../outputs/AgentProviderCountAggregate";
import { AgentProviderMaxAggregate } from "../outputs/AgentProviderMaxAggregate";
import { AgentProviderMinAggregate } from "../outputs/AgentProviderMinAggregate";
import { AgentProviderSumAggregate } from "../outputs/AgentProviderSumAggregate";
export declare class AggregateAgentProvider {
    _count: AgentProviderCountAggregate | null;
    _avg: AgentProviderAvgAggregate | null;
    _sum: AgentProviderSumAggregate | null;
    _min: AgentProviderMinAggregate | null;
    _max: AgentProviderMaxAggregate | null;
}
