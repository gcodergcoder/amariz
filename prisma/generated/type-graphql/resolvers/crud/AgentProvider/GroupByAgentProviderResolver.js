"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAgentProviderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByAgentProviderArgs_1 = require("./args/GroupByAgentProviderArgs");
const AgentProvider_1 = require("../../../models/AgentProvider");
const AgentProviderGroupBy_1 = require("../../outputs/AgentProviderGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAgentProviderResolver = exports.GroupByAgentProviderResolver = class GroupByAgentProviderResolver {
    async groupByAgentProvider(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agentProvider.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AgentProviderGroupBy_1.AgentProviderGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAgentProviderArgs_1.GroupByAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAgentProviderResolver.prototype, "groupByAgentProvider", null);
exports.GroupByAgentProviderResolver = GroupByAgentProviderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AgentProvider_1.AgentProvider)
], GroupByAgentProviderResolver);
