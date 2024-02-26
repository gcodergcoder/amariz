"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneQoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneQoutesArgs_1 = require("./args/UpdateOneQoutesArgs");
const Qoutes_1 = require("../../../models/Qoutes");
const helpers_1 = require("../../../helpers");
let UpdateOneQoutesResolver = exports.UpdateOneQoutesResolver = class UpdateOneQoutesResolver {
    async updateOneQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneQoutesArgs_1.UpdateOneQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneQoutesResolver.prototype, "updateOneQoutes", null);
exports.UpdateOneQoutesResolver = UpdateOneQoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Qoutes_1.Qoutes)
], UpdateOneQoutesResolver);
