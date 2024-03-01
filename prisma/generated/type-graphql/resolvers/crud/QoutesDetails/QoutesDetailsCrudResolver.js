"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateQoutesDetailsArgs_1 = require("./args/AggregateQoutesDetailsArgs");
const CreateManyQoutesDetailsArgs_1 = require("./args/CreateManyQoutesDetailsArgs");
const CreateOneQoutesDetailsArgs_1 = require("./args/CreateOneQoutesDetailsArgs");
const DeleteManyQoutesDetailsArgs_1 = require("./args/DeleteManyQoutesDetailsArgs");
const DeleteOneQoutesDetailsArgs_1 = require("./args/DeleteOneQoutesDetailsArgs");
const FindFirstQoutesDetailsArgs_1 = require("./args/FindFirstQoutesDetailsArgs");
const FindFirstQoutesDetailsOrThrowArgs_1 = require("./args/FindFirstQoutesDetailsOrThrowArgs");
const FindManyQoutesDetailsArgs_1 = require("./args/FindManyQoutesDetailsArgs");
const FindUniqueQoutesDetailsArgs_1 = require("./args/FindUniqueQoutesDetailsArgs");
const FindUniqueQoutesDetailsOrThrowArgs_1 = require("./args/FindUniqueQoutesDetailsOrThrowArgs");
const GroupByQoutesDetailsArgs_1 = require("./args/GroupByQoutesDetailsArgs");
const UpdateManyQoutesDetailsArgs_1 = require("./args/UpdateManyQoutesDetailsArgs");
const UpdateOneQoutesDetailsArgs_1 = require("./args/UpdateOneQoutesDetailsArgs");
const UpsertOneQoutesDetailsArgs_1 = require("./args/UpsertOneQoutesDetailsArgs");
const helpers_1 = require("../../../helpers");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateQoutesDetails_1 = require("../../outputs/AggregateQoutesDetails");
const QoutesDetailsGroupBy_1 = require("../../outputs/QoutesDetailsGroupBy");
let QoutesDetailsCrudResolver = exports.QoutesDetailsCrudResolver = class QoutesDetailsCrudResolver {
    async aggregateQoutesDetails(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstQoutesDetailsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueQoutesDetailsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByQoutesDetails(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateQoutesDetails_1.AggregateQoutesDetails, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateQoutesDetailsArgs_1.AggregateQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "aggregateQoutesDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyQoutesDetailsArgs_1.CreateManyQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "createManyQoutesDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => QoutesDetails_1.QoutesDetails, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneQoutesDetailsArgs_1.CreateOneQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "createOneQoutesDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyQoutesDetailsArgs_1.DeleteManyQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "deleteManyQoutesDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => QoutesDetails_1.QoutesDetails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneQoutesDetailsArgs_1.DeleteOneQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "deleteOneQoutesDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => QoutesDetails_1.QoutesDetails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQoutesDetailsArgs_1.FindFirstQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "findFirstQoutesDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => QoutesDetails_1.QoutesDetails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQoutesDetailsOrThrowArgs_1.FindFirstQoutesDetailsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "findFirstQoutesDetailsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [QoutesDetails_1.QoutesDetails], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyQoutesDetailsArgs_1.FindManyQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "findManyQoutesDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => QoutesDetails_1.QoutesDetails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueQoutesDetailsArgs_1.FindUniqueQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "findUniqueQoutesDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => QoutesDetails_1.QoutesDetails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueQoutesDetailsOrThrowArgs_1.FindUniqueQoutesDetailsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "findUniqueQoutesDetailsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [QoutesDetailsGroupBy_1.QoutesDetailsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByQoutesDetailsArgs_1.GroupByQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "groupByQoutesDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyQoutesDetailsArgs_1.UpdateManyQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "updateManyQoutesDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => QoutesDetails_1.QoutesDetails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneQoutesDetailsArgs_1.UpdateOneQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "updateOneQoutesDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => QoutesDetails_1.QoutesDetails, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneQoutesDetailsArgs_1.UpsertOneQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsCrudResolver.prototype, "upsertOneQoutesDetails", null);
exports.QoutesDetailsCrudResolver = QoutesDetailsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], QoutesDetailsCrudResolver);
