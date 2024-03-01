"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProvider_1 = require("../../../models/AgentProvider");
const Providers_1 = require("../../../models/Providers");
const Qoutes_1 = require("../../../models/Qoutes");
const AgentProviderQoutesArgs_1 = require("./args/AgentProviderQoutesArgs");
const helpers_1 = require("../../../helpers");
let AgentProviderRelationsResolver = exports.AgentProviderRelationsResolver = class AgentProviderRelationsResolver {
    async provider(agentProvider, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.findUniqueOrThrow({
            where: {
                id: agentProvider.id,
            },
        }).provider({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async qoutes(agentProvider, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.findUniqueOrThrow({
            where: {
                id: agentProvider.id,
            },
        }).qoutes({
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
    tslib_1.__metadata("design:paramtypes", [AgentProvider_1.AgentProvider, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderRelationsResolver.prototype, "provider", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Qoutes_1.Qoutes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AgentProvider_1.AgentProvider, Object, Object, AgentProviderQoutesArgs_1.AgentProviderQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentProviderRelationsResolver.prototype, "qoutes", null);
exports.AgentProviderRelationsResolver = AgentProviderRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AgentProvider_1.AgentProvider)
], AgentProviderRelationsResolver);
