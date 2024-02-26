"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyQoutesDetailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyQoutesDetailsArgs_1 = require("./args/UpdateManyQoutesDetailsArgs");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyQoutesDetailsResolver = exports.UpdateManyQoutesDetailsResolver = class UpdateManyQoutesDetailsResolver {
    async updateManyQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyQoutesDetailsArgs_1.UpdateManyQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyQoutesDetailsResolver.prototype, "updateManyQoutesDetails", null);
exports.UpdateManyQoutesDetailsResolver = UpdateManyQoutesDetailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], UpdateManyQoutesDetailsResolver);
