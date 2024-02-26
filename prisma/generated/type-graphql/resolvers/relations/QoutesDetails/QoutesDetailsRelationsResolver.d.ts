import type { GraphQLResolveInfo } from "graphql";
import { Qoutes } from "../../../models/Qoutes";
import { QoutesDetails } from "../../../models/QoutesDetails";
export declare class QoutesDetailsRelationsResolver {
    qoutes(qoutesDetails: QoutesDetails, ctx: any, info: GraphQLResolveInfo): Promise<Qoutes>;
}
