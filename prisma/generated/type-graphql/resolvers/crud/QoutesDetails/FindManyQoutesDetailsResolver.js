"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyQoutesDetailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyQoutesDetailsArgs_1 = require("./args/FindManyQoutesDetailsArgs");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const helpers_1 = require("../../../helpers");
let FindManyQoutesDetailsResolver = exports.FindManyQoutesDetailsResolver = class FindManyQoutesDetailsResolver {
    async findManyQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [QoutesDetails_1.QoutesDetails], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyQoutesDetailsArgs_1.FindManyQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyQoutesDetailsResolver.prototype, "findManyQoutesDetails", null);
exports.FindManyQoutesDetailsResolver = FindManyQoutesDetailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], FindManyQoutesDetailsResolver);
