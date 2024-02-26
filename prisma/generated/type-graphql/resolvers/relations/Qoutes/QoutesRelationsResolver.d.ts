import type { GraphQLResolveInfo } from "graphql";
import { AgentProvider } from "../../../models/AgentProvider";
import { Providers } from "../../../models/Providers";
import { Qoutes } from "../../../models/Qoutes";
import { QoutesDetails } from "../../../models/QoutesDetails";
import { QoutesQoutesDetailsArgs } from "./args/QoutesQoutesDetailsArgs";
export declare class QoutesRelationsResolver {
    provider(qoutes: Qoutes, ctx: any, info: GraphQLResolveInfo): Promise<Providers>;
    agentProvider(qoutes: Qoutes, ctx: any, info: GraphQLResolveInfo): Promise<AgentProvider>;
    qoutesDetails(qoutes: Qoutes, ctx: any, info: GraphQLResolveInfo, args: QoutesQoutesDetailsArgs): Promise<QoutesDetails[]>;
}
