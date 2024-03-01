"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Qoutes_1 = require("../../../models/Qoutes");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const helpers_1 = require("../../../helpers");
let QoutesDetailsRelationsResolver = exports.QoutesDetailsRelationsResolver = class QoutesDetailsRelationsResolver {
    async qoutes(qoutesDetails, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.findUniqueOrThrow({
            where: {
                id: qoutesDetails.id,
            },
        }).qoutes({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Qoutes_1.Qoutes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [QoutesDetails_1.QoutesDetails, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QoutesDetailsRelationsResolver.prototype, "qoutes", null);
exports.QoutesDetailsRelationsResolver = QoutesDetailsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], QoutesDetailsRelationsResolver);
