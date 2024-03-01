"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProvider_1 = require("../../../models/AgentProvider");
const Providers_1 = require("../../../models/Providers");
const Qoutes_1 = require("../../../models/Qoutes");
const ProvidersAgentProviderArgs_1 = require("./args/ProvidersAgentProviderArgs");
const ProvidersQuotesArgs_1 = require("./args/ProvidersQuotesArgs");
const helpers_1 = require("../../../helpers");
let ProvidersRelationsResolver = exports.ProvidersRelationsResolver = class ProvidersRelationsResolver {
    async agentProvider(providers, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findUniqueOrThrow({
            where: {
                id: providers.id,
            },
        }).agentProvider({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async quotes(providers, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findUniqueOrThrow({
            where: {
                id: providers.id,
            },
        }).quotes({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [AgentProvider_1.AgentProvider], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Providers_1.Providers, Object, Object, ProvidersAgentProviderArgs_1.ProvidersAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersRelationsResolver.prototype, "agentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Qoutes_1.Qoutes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Providers_1.Providers, Object, Object, ProvidersQuotesArgs_1.ProvidersQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersRelationsResolver.prototype, "quotes", null);
exports.ProvidersRelationsResolver = ProvidersRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], ProvidersRelationsResolver);
