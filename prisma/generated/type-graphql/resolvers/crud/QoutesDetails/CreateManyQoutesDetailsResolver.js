"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyQoutesDetailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyQoutesDetailsArgs_1 = require("./args/CreateManyQoutesDetailsArgs");
const QoutesDetails_1 = require("../../../models/QoutesDetails");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyQoutesDetailsResolver = exports.CreateManyQoutesDetailsResolver = class CreateManyQoutesDetailsResolver {
    async createManyQoutesDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutesDetails.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyQoutesDetailsArgs_1.CreateManyQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyQoutesDetailsResolver.prototype, "createManyQoutesDetails", null);
exports.CreateManyQoutesDetailsResolver = CreateManyQoutesDetailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => QoutesDetails_1.QoutesDetails)
], CreateManyQoutesDetailsResolver);
