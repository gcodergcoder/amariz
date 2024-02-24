"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAgentProviderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstAgentProviderArgs_1 = require("./args/FindFirstAgentProviderArgs");
const AgentProvider_1 = require("../../../models/AgentProvider");
const helpers_1 = require("../../../helpers");
let FindFirstAgentProviderResolver = exports.FindFirstAgentProviderResolver = class FindFirstAgentProviderResolver {
    async findFirstAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindFirstAgentProviderResolver.prototype, "findFirstAgentProvider", null);
exports.FindFirstAgentProviderResolver = FindFirstAgentProviderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AgentProvider_1.AgentProvider)
], FindFirstAgentProviderResolver);
