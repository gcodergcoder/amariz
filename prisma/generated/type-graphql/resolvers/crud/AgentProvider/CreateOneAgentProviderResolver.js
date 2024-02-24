"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAgentProviderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneAgentProviderArgs_1 = require("./args/CreateOneAgentProviderArgs");
const AgentProvider_1 = require("../../../models/AgentProvider");
const helpers_1 = require("../../../helpers");
let CreateOneAgentProviderResolver = exports.CreateOneAgentProviderResolver = class CreateOneAgentProviderResolver {
    async createOneAgentProvider(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAgentProviderArgs_1.CreateOneAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneAgentProviderResolver.prototype, "createOneAgentProvider", null);
exports.CreateOneAgentProviderResolver = CreateOneAgentProviderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AgentProvider_1.AgentProvider)
], CreateOneAgentProviderResolver);
