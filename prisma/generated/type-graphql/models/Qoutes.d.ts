import { AgentProvider } from "../models/AgentProvider";
import { Providers } from "../models/Providers";
import { QoutesDetails } from "../models/QoutesDetails";
import { QoutesCount } from "../resolvers/outputs/QoutesCount";
export declare class Qoutes {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    provider?: Providers;
    providerId: string;
    agentProvider?: AgentProvider;
    agentProviderId: string;
    qoutesDetails?: QoutesDetails[];
    _count?: QoutesCount | null;
}
