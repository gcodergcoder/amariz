"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByQoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByQoutesArgs_1 = require("./args/GroupByQoutesArgs");
const Qoutes_1 = require("../../../models/Qoutes");
const QoutesGroupBy_1 = require("../../outputs/QoutesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByQoutesResolver = exports.GroupByQoutesResolver = class GroupByQoutesResolver {
    async groupByQoutes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [QoutesGroupBy_1.QoutesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByQoutesArgs_1.GroupByQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByQoutesResolver.prototype, "groupByQoutes", null);
exports.GroupByQoutesResolver = GroupByQoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Qoutes_1.Qoutes)
], GroupByQoutesResolver);
