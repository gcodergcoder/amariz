"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateQoutesArgs_1 = require("./args/AggregateQoutesArgs");
const CreateManyQoutesArgs_1 = require("./args/CreateManyQoutesArgs");
const CreateOneQoutesArgs_1 = require("./args/CreateOneQoutesArgs");
const DeleteManyQoutesArgs_1 = require("./args/DeleteManyQoutesArgs");
const DeleteOneQoutesArgs_1 = require("./args/DeleteOneQoutesArgs");
const FindFirstQoutesArgs_1 = require("./args/FindFirstQoutesArgs");
const FindFirstQoutesOrThrowArgs_1 = require("./args/FindFirstQoutesOrThrowArgs");
const FindManyQoutesArgs_1 = require("./args/FindManyQoutesArgs");
const FindUniqueQoutesArgs_1 = require("./args/FindUniqueQoutesArgs");
const FindUniqueQoutesOrThrowArgs_1 = require("./args/FindUniqueQoutesOrThrowArgs");
const GroupByQoutesArgs_1 = require("./args/GroupByQoutesArgs");
const UpdateManyQoutesArgs_1 = require("./args/UpdateManyQoutesArgs");
const UpdateOneQoutesArgs_1 = require("./args/UpdateOneQoutesArgs");
const UpsertOneQoutesArgs_1 = require("./args/UpsertOneQoutesArgs");
const helpers_1 = require("../../../helpers");
const Qoutes_1 = require("../../../models/Qoutes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateQoutes_1 = require("../../outputs/AggregateQoutes");
const QoutesGroupBy_1 = require("../../outputs/QoutesGroupBy");
let QoutesCrudResolver = exports.QoutesCrudResolver = class QoutesCrudResolver {
    async aggregateQoutes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstQoutesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueQoutesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByQoutes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateQoutes_1.AggregateQoutes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateQoutesArgs_1.AggregateQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "aggregateQoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyQoutesArgs_1.CreateManyQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "createManyQoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Qoutes_1.Qoutes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneQoutesArgs_1.CreateOneQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "createOneQoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyQoutesArgs_1.DeleteManyQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "deleteManyQoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Qoutes_1.Qoutes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneQoutesArgs_1.DeleteOneQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "deleteOneQoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Qoutes_1.Qoutes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQoutesArgs_1.FindFirstQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "findFirstQoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Qoutes_1.Qoutes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQoutesOrThrowArgs_1.FindFirstQoutesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "findFirstQoutesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Qoutes_1.Qoutes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyQoutesArgs_1.FindManyQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "findManyQoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Qoutes_1.Qoutes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueQoutesArgs_1.FindUniqueQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "findUniqueQoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Qoutes_1.Qoutes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueQoutesOrThrowArgs_1.FindUniqueQoutesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "findUniqueQoutesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [QoutesGroupBy_1.QoutesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByQoutesArgs_1.GroupByQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "groupByQoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyQoutesArgs_1.UpdateManyQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "updateManyQoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Qoutes_1.Qoutes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneQoutesArgs_1.UpdateOneQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "updateOneQoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Qoutes_1.Qoutes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneQoutesArgs_1.UpsertOneQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesCrudResolver.prototype, "upsertOneQoutes", null);
exports.QoutesCrudResolver = QoutesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Qoutes_1.Qoutes)
], QoutesCrudResolver);
