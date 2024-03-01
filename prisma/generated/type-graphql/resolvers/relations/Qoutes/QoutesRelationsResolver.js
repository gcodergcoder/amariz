"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProvider_1 = require("../../../models/AgentProvider");
const Providers_1 = require("../../../models/Providers");
const Qoutes_1 = require("../../../models/Qoutes");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const QoutesQoutesDetailsArgs_1 = require("./args/QoutesQoutesDetailsArgs");
const helpers_1 = require("../../../helpers");
let QoutesRelationsResolver = exports.QoutesRelationsResolver = class QoutesRelationsResolver {
    async provider(qoutes, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.findUniqueOrThrow({
            where: {
                id: qoutes.id,
            },
        }).provider({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async agentProvider(qoutes, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.findUniqueOrThrow({
            where: {
                id: qoutes.id,
            },
        }).agentProvider({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async qoutesDetails(qoutes, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.findUniqueOrThrow({
            where: {
                id: qoutes.id,
            },
        }).qoutesDetails({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Providers_1.Providers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Qoutes_1.Qoutes, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesRelationsResolver.prototype, "provider", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => AgentProvider_1.AgentProvider, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Qoutes_1.Qoutes, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesRelationsResolver.prototype, "agentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [QoutesDetails_1.QoutesDetails], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Qoutes_1.Qoutes, Object, Object, QoutesQoutesDetailsArgs_1.QoutesQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesRelationsResolver.prototype, "qoutesDetails", null);
exports.QoutesRelationsResolver = QoutesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Qoutes_1.Qoutes)
], QoutesRelationsResolver);
