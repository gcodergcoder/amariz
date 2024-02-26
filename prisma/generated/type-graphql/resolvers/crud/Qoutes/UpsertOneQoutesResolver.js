"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneQoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneQoutesArgs_1 = require("./args/UpsertOneQoutesArgs");
const Qoutes_1 = require("../../../models/Qoutes");
const helpers_1 = require("../../../helpers");
let UpsertOneQoutesResolver = exports.UpsertOneQoutesResolver = class UpsertOneQoutesResolver {
    async upsertOneQoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).qoutes.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Qoutes_1.Qoutes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneQoutesArgs_1.UpsertOneQoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneQoutesResolver.prototype, "upsertOneQoutes", null);
exports.UpsertOneQoutesResolver = UpsertOneQoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Qoutes_1.Qoutes)
], UpsertOneQoutesResolver);
