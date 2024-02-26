import { ProvidersCountAgentProviderArgs } from "./args/ProvidersCountAgentProviderArgs";
import { ProvidersCountQuotesArgs } from "./args/ProvidersCountQuotesArgs";
export declare class ProvidersCount {
    agentProvider: number;
    quotes: number;
    getAgentProvider(root: ProvidersCount, args: ProvidersCountAgentProviderArgs): number;
    getQuotes(root: ProvidersCount, args: ProvidersCountQuotesArgs): number;
}
