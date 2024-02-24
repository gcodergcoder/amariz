import { Providers } from "../models/Providers";
export declare class AgentProvider {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    surName: string;
    email: string;
    phone: string;
    provider?: Providers;
    providerId: number;
}
