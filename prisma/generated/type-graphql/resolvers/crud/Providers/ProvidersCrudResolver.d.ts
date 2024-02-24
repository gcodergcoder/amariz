import type { GraphQLResolveInfo } from "graphql";
import { AggregateProvidersArgs } from "./args/AggregateProvidersArgs";
import { CreateManyProvidersArgs } from "./args/CreateManyProvidersArgs";
import { CreateOneProvidersArgs } from "./args/CreateOneProvidersArgs";
import { DeleteManyProvidersArgs } from "./args/DeleteManyProvidersArgs";
import { DeleteOneProvidersArgs } from "./args/DeleteOneProvidersArgs";
import { FindFirstProvidersArgs } from "./args/FindFirstProvidersArgs";
import { FindFirstProvidersOrThrowArgs } from "./args/FindFirstProvidersOrThrowArgs";
import { FindManyProvidersArgs } from "./args/FindManyProvidersArgs";
import { FindUniqueProvidersArgs } from "./args/FindUniqueProvidersArgs";
import { FindUniqueProvidersOrThrowArgs } from "./args/FindUniqueProvidersOrThrowArgs";
import { GroupByProvidersArgs } from "./args/GroupByProvidersArgs";
import { UpdateManyProvidersArgs } from "./args/UpdateManyProvidersArgs";
import { UpdateOneProvidersArgs } from "./args/UpdateOneProvidersArgs";
import { UpsertOneProvidersArgs } from "./args/UpsertOneProvidersArgs";
import { Providers } from "../../../models/Providers";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProviders } from "../../outputs/AggregateProviders";
import { ProvidersGroupBy } from "../../outputs/ProvidersGroupBy";
export declare class ProvidersCrudResolver {
    aggregateProviders(ctx: any, info: GraphQLResolveInfo, args: AggregateProvidersArgs): Promise<AggregateProviders>;
    createManyProviders(ctx: any, info: GraphQLResolveInfo, args: CreateManyProvidersArgs): Promise<AffectedRowsOutput>;
    createOneProviders(ctx: any, info: GraphQLResolveInfo, args: CreateOneProvidersArgs): Promise<Providers>;
    deleteManyProviders(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProvidersArgs): Promise<AffectedRowsOutput>;
    deleteOneProviders(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProvidersArgs): Promise<Providers | null>;
    findFirstProviders(ctx: any, info: GraphQLResolveInfo, args: FindFirstProvidersArgs): Promise<Providers | null>;
    findFirstProvidersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstProvidersOrThrowArgs): Promise<Providers | null>;
    findManyProviders(ctx: any, info: GraphQLResolveInfo, args: FindManyProvidersArgs): Promise<Providers[]>;
    findUniqueProviders(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProvidersArgs): Promise<Providers | null>;
    findUniqueProvidersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProvidersOrThrowArgs): Promise<Providers | null>;
    groupByProviders(ctx: any, info: GraphQLResolveInfo, args: GroupByProvidersArgs): Promise<ProvidersGroupBy[]>;
    updateManyProviders(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProvidersArgs): Promise<AffectedRowsOutput>;
    updateOneProviders(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProvidersArgs): Promise<Providers | null>;
    upsertOneProviders(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProvidersArgs): Promise<Providers>;
}
