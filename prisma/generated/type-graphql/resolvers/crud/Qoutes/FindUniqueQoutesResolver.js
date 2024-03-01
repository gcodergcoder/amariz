"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueQoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueQoutesArgs_1 = require("./args/FindUniqueQoutesArgs");
const Qoutes_1 = require("../../../models/Qoutes");
const helpers_1 = require("../../../helpers");
let FindUniqueQoutesResolver = exports.FindUniqueQoutesResolver = class FindUniqueQoutesResolver {
    async findUniqueQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueQoutesArgs_1.FindUniqueQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueQoutesResolver.prototype, "findUniqueQoutes", null);
exports.FindUniqueQoutesResolver = FindUniqueQoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Qoutes_1.Qoutes)
], FindUniqueQoutesResolver);
