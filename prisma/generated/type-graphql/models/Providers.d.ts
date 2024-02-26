import { AgentProvider } from "../models/AgentProvider";
import { Qoutes } from "../models/Qoutes";
import { ProvidersCount } from "../resolvers/outputs/ProvidersCount";
export declare class Providers {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    nit: string;
    address: string;
    agentProvider?: AgentProvider[];
    quotes?: Qoutes[];
    _count?: ProvidersCount | null;
}
