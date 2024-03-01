"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByQoutesDetailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByQoutesDetailsArgs_1 = require("./args/GroupByQoutesDetailsArgs");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const QoutesDetailsGroupBy_1 = require("../../outputs/QoutesDetailsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByQoutesDetailsResolver = exports.GroupByQoutesDetailsResolver = class GroupByQoutesDetailsResolver {
    async groupByQoutesDetails(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [QoutesDetailsGroupBy_1.QoutesDetailsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByQoutesDetailsArgs_1.GroupByQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByQoutesDetailsResolver.prototype, "groupByQoutesDetails", null);
exports.GroupByQoutesDetailsResolver = GroupByQoutesDetailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], GroupByQoutesDetailsResolver);
