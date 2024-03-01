"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstQoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesOrderByWithRelationInput_1 = require("../../../inputs/QoutesOrderByWithRelationInput");
const QoutesWhereInput_1 = require("../../../inputs/QoutesWhereInput");
const QoutesWhereUniqueInput_1 = require("../../../inputs/QoutesWhereUniqueInput");
const QoutesScalarFieldEnum_1 = require("../../../../enums/QoutesScalarFieldEnum");
let FindFirstQoutesArgs = exports.FindFirstQoutesArgs = class FindFirstQoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], FindFirstQoutesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesOrderByWithRelationInput_1.QoutesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstQoutesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], FindFirstQoutesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstQoutesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstQoutesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesScalarFieldEnum_1.QoutesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstQoutesArgs.prototype, "distinct", void 0);
exports.FindFirstQoutesArgs = FindFirstQoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstQoutesArgs);
