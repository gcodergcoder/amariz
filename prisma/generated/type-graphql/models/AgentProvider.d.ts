import { Providers } from "../models/Providers";
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
}
