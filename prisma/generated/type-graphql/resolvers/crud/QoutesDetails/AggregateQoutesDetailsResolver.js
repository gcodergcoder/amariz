"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQoutesDetailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateQoutesDetailsArgs_1 = require("./args/AggregateQoutesDetailsArgs");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const AggregateQoutesDetails_1 = require("../../outputs/AggregateQoutesDetails");
const helpers_1 = require("../../../helpers");
let AggregateQoutesDetailsResolver = exports.AggregateQoutesDetailsResolver = class AggregateQoutesDetailsResolver {
    async aggregateQoutesDetails(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateQoutesDetails_1.AggregateQoutesDetails, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateQoutesDetailsArgs_1.AggregateQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateQoutesDetailsResolver.prototype, "aggregateQoutesDetails", null);
exports.AggregateQoutesDetailsResolver = AggregateQoutesDetailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], AggregateQoutesDetailsResolver);
