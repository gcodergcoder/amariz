"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateQoutesArgs_1 = require("./args/AggregateQoutesArgs");
const Qoutes_1 = require("../../../models/Qoutes");
const AggregateQoutes_1 = require("../../outputs/AggregateQoutes");
const helpers_1 = require("../../../helpers");
let AggregateQoutesResolver = exports.AggregateQoutesResolver = class AggregateQoutesResolver {
    async aggregateQoutes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateQoutes_1.AggregateQoutes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateQoutesArgs_1.AggregateQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateQoutesResolver.prototype, "aggregateQoutes", null);
exports.AggregateQoutesResolver = AggregateQoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Qoutes_1.Qoutes)
], AggregateQoutesResolver);
