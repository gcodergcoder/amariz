"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstQoutesDetailsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstQoutesDetailsOrThrowArgs_1 = require("./args/FindFirstQoutesDetailsOrThrowArgs");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const helpers_1 = require("../../../helpers");
let FindFirstQoutesDetailsOrThrowResolver = exports.FindFirstQoutesDetailsOrThrowResolver = class FindFirstQoutesDetailsOrThrowResolver {
    async findFirstQoutesDetailsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQoutesDetailsOrThrowArgs_1.FindFirstQoutesDetailsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstQoutesDetailsOrThrowResolver.prototype, "findFirstQoutesDetailsOrThrow", null);
exports.FindFirstQoutesDetailsOrThrowResolver = FindFirstQoutesDetailsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], FindFirstQoutesDetailsOrThrowResolver);
