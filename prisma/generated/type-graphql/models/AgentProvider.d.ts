import { Providers } from "../models/Providers";
import { Qoutes } from "../models/Qoutes";
import { AgentProviderCount } from "../resolvers/outputs/AgentProviderCount";
export declare class AgentProvider {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    surName: string;
    email: string;
    phone: string;
    provider?: Providers;
    providerId: string;
    qoutes?: Qoutes[];
    _count?: AgentProviderCount | null;
}
