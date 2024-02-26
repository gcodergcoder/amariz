"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneQoutesDetailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneQoutesDetailsArgs_1 = require("./args/CreateOneQoutesDetailsArgs");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const helpers_1 = require("../../../helpers");
let CreateOneQoutesDetailsResolver = exports.CreateOneQoutesDetailsResolver = class CreateOneQoutesDetailsResolver {
    async createOneQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneQoutesDetailsArgs_1.CreateOneQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneQoutesDetailsResolver.prototype, "createOneQoutesDetails", null);
exports.CreateOneQoutesDetailsResolver = CreateOneQoutesDetailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], CreateOneQoutesDetailsResolver);
