import { AgentProvider } from "../models/AgentProvider";
import { ProvidersCount } from "../resolvers/outputs/ProvidersCount";
export declare class Providers {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    nit: string;
    addredd: string;
    agentProvider?: AgentProvider[];
    _count?: ProvidersCount | null;
}
