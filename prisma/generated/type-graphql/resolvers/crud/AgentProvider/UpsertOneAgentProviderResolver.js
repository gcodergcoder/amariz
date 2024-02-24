"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAgentProviderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneAgentProviderArgs_1 = require("./args/UpsertOneAgentProviderArgs");
const AgentProvider_1 = require("../../../models/AgentProvider");
const helpers_1 = require("../../../helpers");
let UpsertOneAgentProviderResolver = exports.UpsertOneAgentProviderResolver = class UpsertOneAgentProviderResolver {
    async upsertOneAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertOneAgentProviderResolver.prototype, "upsertOneAgentProvider", null);
exports.UpsertOneAgentProviderResolver = UpsertOneAgentProviderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AgentProvider_1.AgentProvider)
], UpsertOneAgentProviderResolver);
