"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyQoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyQoutesArgs_1 = require("./args/UpdateManyQoutesArgs");
const Qoutes_1 = require("../../../models/Qoutes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyQoutesResolver = exports.UpdateManyQoutesResolver = class UpdateManyQoutesResolver {
    async updateManyQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyQoutesArgs_1.UpdateManyQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyQoutesResolver.prototype, "updateManyQoutes", null);
exports.UpdateManyQoutesResolver = UpdateManyQoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Qoutes_1.Qoutes)
], UpdateManyQoutesResolver);
