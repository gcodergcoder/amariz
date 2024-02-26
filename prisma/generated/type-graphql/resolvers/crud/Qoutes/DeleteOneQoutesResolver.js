"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneQoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneQoutesArgs_1 = require("./args/DeleteOneQoutesArgs");
const Qoutes_1 = require("../../../models/Qoutes");
const helpers_1 = require("../../../helpers");
let DeleteOneQoutesResolver = exports.DeleteOneQoutesResolver = class DeleteOneQoutesResolver {
    async deleteOneQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Qoutes_1.Qoutes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneQoutesArgs_1.DeleteOneQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneQoutesResolver.prototype, "deleteOneQoutes", null);
exports.DeleteOneQoutesResolver = DeleteOneQoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Qoutes_1.Qoutes)
], DeleteOneQoutesResolver);
