"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAgentProviderArgs_1 = require("./args/AggregateAgentProviderArgs");
const CreateManyAgentProviderArgs_1 = require("./args/CreateManyAgentProviderArgs");
const CreateOneAgentProviderArgs_1 = require("./args/CreateOneAgentProviderArgs");
const DeleteManyAgentProviderArgs_1 = require("./args/DeleteManyAgentProviderArgs");
const DeleteOneAgentProviderArgs_1 = require("./args/DeleteOneAgentProviderArgs");
const FindFirstAgentProviderArgs_1 = require("./args/FindFirstAgentProviderArgs");
const FindFirstAgentProviderOrThrowArgs_1 = require("./args/FindFirstAgentProviderOrThrowArgs");
const FindManyAgentProviderArgs_1 = require("./args/FindManyAgentProviderArgs");
const FindUniqueAgentProviderArgs_1 = require("./args/FindUniqueAgentProviderArgs");
const FindUniqueAgentProviderOrThrowArgs_1 = require("./args/FindUniqueAgentProviderOrThrowArgs");
const GroupByAgentProviderArgs_1 = require("./args/GroupByAgentProviderArgs");
const UpdateManyAgentProviderArgs_1 = require("./args/UpdateManyAgentProviderArgs");
const UpdateOneAgentProviderArgs_1 = require("./args/UpdateOneAgentProviderArgs");
const UpsertOneAgentProviderArgs_1 = require("./args/UpsertOneAgentProviderArgs");
const helpers_1 = require("../../../helpers");
const AgentProvider_1 = require("../../../models/AgentProvider");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AgentProviderGroupBy_1 = require("../../outputs/AgentProviderGroupBy");
const AggregateAgentProvider_1 = require("../../outputs/AggregateAgentProvider");
let AgentProviderCrudResolver = exports.AgentProviderCrudResolver = class AgentProviderCrudResolver {
    async aggregateAgentProvider(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAgentProviderOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async agentProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async agentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAgentProvider(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAgentProvider_1.AggregateAgentProvider, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAgentProviderArgs_1.AggregateAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "aggregateAgentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAgentProviderArgs_1.CreateManyAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "createManyAgentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AgentProvider_1.AgentProvider, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAgentProviderArgs_1.CreateOneAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "createOneAgentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAgentProviderArgs_1.DeleteManyAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "deleteManyAgentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AgentProvider_1.AgentProvider, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAgentProviderArgs_1.DeleteOneAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "deleteOneAgentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AgentProvider_1.AgentProvider, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAgentProviderArgs_1.FindFirstAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "findFirstAgentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AgentProvider_1.AgentProvider, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAgentProviderOrThrowArgs_1.FindFirstAgentProviderOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "findFirstAgentProviderOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AgentProvider_1.AgentProvider], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAgentProviderArgs_1.FindManyAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "agentProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AgentProvider_1.AgentProvider, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAgentProviderArgs_1.FindUniqueAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "agentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AgentProvider_1.AgentProvider, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAgentProviderOrThrowArgs_1.FindUniqueAgentProviderOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "getAgentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AgentProviderGroupBy_1.AgentProviderGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAgentProviderArgs_1.GroupByAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "groupByAgentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAgentProviderArgs_1.UpdateManyAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "updateManyAgentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AgentProvider_1.AgentProvider, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAgentProviderArgs_1.UpdateOneAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "updateOneAgentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AgentProvider_1.AgentProvider, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAgentProviderArgs_1.UpsertOneAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderCrudResolver.prototype, "upsertOneAgentProvider", null);
exports.AgentProviderCrudResolver = AgentProviderCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AgentProvider_1.AgentProvider)
], AgentProviderCrudResolver);
