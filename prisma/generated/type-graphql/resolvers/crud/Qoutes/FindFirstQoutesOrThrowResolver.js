"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstQoutesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstQoutesOrThrowArgs_1 = require("./args/FindFirstQoutesOrThrowArgs");
const Qoutes_1 = require("../../../models/Qoutes");
const helpers_1 = require("../../../helpers");
let FindFirstQoutesOrThrowResolver = exports.FindFirstQoutesOrThrowResolver = class FindFirstQoutesOrThrowResolver {
    async findFirstQoutesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Qoutes_1.Qoutes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQoutesOrThrowArgs_1.FindFirstQoutesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstQoutesOrThrowResolver.prototype, "findFirstQoutesOrThrow", null);
exports.FindFirstQoutesOrThrowResolver = FindFirstQoutesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Qoutes_1.Qoutes)
], FindFirstQoutesOrThrowResolver);
