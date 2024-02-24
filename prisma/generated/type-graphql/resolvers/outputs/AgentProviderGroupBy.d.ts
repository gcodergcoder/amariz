import { AgentProviderAvgAggregate } from "../outputs/AgentProviderAvgAggregate";
import { AgentProviderCountAggregate } from "../outputs/AgentProviderCountAggregate";
import { AgentProviderMaxAggregate } from "../outputs/AgentProviderMaxAggregate";
import { AgentProviderMinAggregate } from "../outputs/AgentProviderMinAggregate";
import { AgentProviderSumAggregate } from "../outputs/AgentProviderSumAggregate";
export declare class AgentProviderGroupBy {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    surName: string;
    email: string;
    phone: string;
    providerId: number;
    _count: AgentProviderCountAggregate | null;
    _avg: AgentProviderAvgAggregate | null;
    _sum: AgentProviderSumAggregate | null;
    _min: AgentProviderMinAggregate | null;
    _max: AgentProviderMaxAggregate | null;
}
