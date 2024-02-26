"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyQoutesDetailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyQoutesDetailsArgs_1 = require("./args/DeleteManyQoutesDetailsArgs");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyQoutesDetailsResolver = exports.DeleteManyQoutesDetailsResolver = class DeleteManyQoutesDetailsResolver {
    async deleteManyQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyQoutesDetailsArgs_1.DeleteManyQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyQoutesDetailsResolver.prototype, "deleteManyQoutesDetails", null);
exports.DeleteManyQoutesDetailsResolver = DeleteManyQoutesDetailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], DeleteManyQoutesDetailsResolver);
