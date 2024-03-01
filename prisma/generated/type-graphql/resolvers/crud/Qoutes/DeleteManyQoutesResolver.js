"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyQoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyQoutesArgs_1 = require("./args/DeleteManyQoutesArgs");
const Qoutes_1 = require("../../../models/Qoutes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyQoutesResolver = exports.DeleteManyQoutesResolver = class DeleteManyQoutesResolver {
    async deleteManyQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyQoutesArgs_1.DeleteManyQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyQoutesResolver.prototype, "deleteManyQoutes", null);
exports.DeleteManyQoutesResolver = DeleteManyQoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Qoutes_1.Qoutes)
], DeleteManyQoutesResolver);
