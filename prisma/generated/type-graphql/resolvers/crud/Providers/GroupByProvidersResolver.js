"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByProvidersArgs_1 = require("./args/GroupByProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const ProvidersGroupBy_1 = require("../../outputs/ProvidersGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProvidersResolver = exports.GroupByProvidersResolver = class GroupByProvidersResolver {
    async groupByProviders(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProvidersGroupBy_1.ProvidersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProvidersArgs_1.GroupByProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByProvidersResolver.prototype, "groupByProviders", null);
exports.GroupByProvidersResolver = GroupByProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], GroupByProvidersResolver);
