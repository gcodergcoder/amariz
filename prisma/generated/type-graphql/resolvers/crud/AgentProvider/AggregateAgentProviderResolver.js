"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAgentProviderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAgentProviderArgs_1 = require("./args/AggregateAgentProviderArgs");
const AgentProvider_1 = require("../../../models/AgentProvider");
const AggregateAgentProvider_1 = require("../../outputs/AggregateAgentProvider");
const helpers_1 = require("../../../helpers");
let AggregateAgentProviderResolver = exports.AggregateAgentProviderResolver = class AggregateAgentProviderResolver {
    async aggregateAgentProvider(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAgentProvider_1.AggregateAgentProvider, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAgentProviderArgs_1.AggregateAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAgentProviderResolver.prototype, "aggregateAgentProvider", null);
exports.AggregateAgentProviderResolver = AggregateAgentProviderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AgentProvider_1.AgentProvider)
], AggregateAgentProviderResolver);
