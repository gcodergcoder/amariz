"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneQoutesDetailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneQoutesDetailsArgs_1 = require("./args/UpsertOneQoutesDetailsArgs");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const helpers_1 = require("../../../helpers");
let UpsertOneQoutesDetailsResolver = exports.UpsertOneQoutesDetailsResolver = class UpsertOneQoutesDetailsResolver {
    async upsertOneQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => QoutesDetails_1.QoutesDetails, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneQoutesDetailsArgs_1.UpsertOneQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneQoutesDetailsResolver.prototype, "upsertOneQoutesDetails", null);
exports.UpsertOneQoutesDetailsResolver = UpsertOneQoutesDetailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], UpsertOneQoutesDetailsResolver);
