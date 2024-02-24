"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAgentProviderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueAgentProviderArgs_1 = require("./args/FindUniqueAgentProviderArgs");
const AgentProvider_1 = require("../../../models/AgentProvider");
const helpers_1 = require("../../../helpers");
let FindUniqueAgentProviderResolver = exports.FindUniqueAgentProviderResolver = class FindUniqueAgentProviderResolver {
    async agentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAgentProviderArgs_1.FindUniqueAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueAgentProviderResolver.prototype, "agentProvider", null);
exports.FindUniqueAgentProviderResolver = FindUniqueAgentProviderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AgentProvider_1.AgentProvider)
], FindUniqueAgentProviderResolver);
