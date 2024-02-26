"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueQoutesDetailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueQoutesDetailsArgs_1 = require("./args/FindUniqueQoutesDetailsArgs");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const helpers_1 = require("../../../helpers");
let FindUniqueQoutesDetailsResolver = exports.FindUniqueQoutesDetailsResolver = class FindUniqueQoutesDetailsResolver {
    async findUniqueQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => QoutesDetails_1.QoutesDetails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueQoutesDetailsArgs_1.FindUniqueQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueQoutesDetailsResolver.prototype, "findUniqueQoutesDetails", null);
exports.FindUniqueQoutesDetailsResolver = FindUniqueQoutesDetailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], FindUniqueQoutesDetailsResolver);
