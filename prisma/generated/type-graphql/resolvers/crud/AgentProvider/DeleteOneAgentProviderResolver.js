"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAgentProviderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneAgentProviderArgs_1 = require("./args/DeleteOneAgentProviderArgs");
const AgentProvider_1 = require("../../../models/AgentProvider");
const helpers_1 = require("../../../helpers");
let DeleteOneAgentProviderResolver = exports.DeleteOneAgentProviderResolver = class DeleteOneAgentProviderResolver {
    async deleteOneAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteOneAgentProviderResolver.prototype, "deleteOneAgentProvider", null);
exports.DeleteOneAgentProviderResolver = DeleteOneAgentProviderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AgentProvider_1.AgentProvider)
], DeleteOneAgentProviderResolver);
