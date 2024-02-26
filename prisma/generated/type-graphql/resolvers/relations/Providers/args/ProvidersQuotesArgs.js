"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesOrderByWithRelationInput_1 = require("../../../inputs/QoutesOrderByWithRelationInput");
const QoutesWhereInput_1 = require("../../../inputs/QoutesWhereInput");
const QoutesWhereUniqueInput_1 = require("../../../inputs/QoutesWhereUniqueInput");
const QoutesScalarFieldEnum_1 = require("../../../../enums/QoutesScalarFieldEnum");
let ProvidersQuotesArgs = exports.ProvidersQuotesArgs = class ProvidersQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], ProvidersQuotesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesOrderByWithRelationInput_1.QoutesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProvidersQuotesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], ProvidersQuotesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProvidersQuotesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProvidersQuotesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesScalarFieldEnum_1.QoutesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProvidersQuotesArgs.prototype, "distinct", void 0);
exports.ProvidersQuotesArgs = ProvidersQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProvidersQuotesArgs);
