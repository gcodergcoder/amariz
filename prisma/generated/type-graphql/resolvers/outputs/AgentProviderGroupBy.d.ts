import { AgentProviderCountAggregate } from "../outputs/AgentProviderCountAggregate";
import { AgentProviderMaxAggregate } from "../outputs/AgentProviderMaxAggregate";
import { AgentProviderMinAggregate } from "../outputs/AgentProviderMinAggregate";
export declare class AgentProviderGroupBy {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    surName: string;
    email: string;
    phone: string;
    providerId: string;
    _count: AgentProviderCountAggregate | null;
    _min: AgentProviderMinAggregate | null;
    _max: AgentProviderMaxAggregate | null;
}
