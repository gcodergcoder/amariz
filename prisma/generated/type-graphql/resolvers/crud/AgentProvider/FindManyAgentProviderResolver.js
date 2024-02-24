"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAgentProviderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyAgentProviderArgs_1 = require("./args/FindManyAgentProviderArgs");
const AgentProvider_1 = require("../../../models/AgentProvider");
const helpers_1 = require("../../../helpers");
let FindManyAgentProviderResolver = exports.FindManyAgentProviderResolver = class FindManyAgentProviderResolver {
    async agentProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyAgentProviderResolver.prototype, "agentProviders", null);
exports.FindManyAgentProviderResolver = FindManyAgentProviderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AgentProvider_1.AgentProvider)
], FindManyAgentProviderResolver);
