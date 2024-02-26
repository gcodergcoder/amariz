"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneQoutesDetailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneQoutesDetailsArgs_1 = require("./args/UpdateOneQoutesDetailsArgs");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const helpers_1 = require("../../../helpers");
let UpdateOneQoutesDetailsResolver = exports.UpdateOneQoutesDetailsResolver = class UpdateOneQoutesDetailsResolver {
    async updateOneQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => QoutesDetails_1.QoutesDetails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneQoutesDetailsArgs_1.UpdateOneQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneQoutesDetailsResolver.prototype, "updateOneQoutesDetails", null);
exports.UpdateOneQoutesDetailsResolver = UpdateOneQoutesDetailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], UpdateOneQoutesDetailsResolver);
