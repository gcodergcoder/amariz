"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstQoutesDetailsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsOrderByWithRelationInput_1 = require("../../../inputs/QoutesDetailsOrderByWithRelationInput");
const QoutesDetailsWhereInput_1 = require("../../../inputs/QoutesDetailsWhereInput");
const QoutesDetailsWhereUniqueInput_1 = require("../../../inputs/QoutesDetailsWhereUniqueInput");
const QoutesDetailsScalarFieldEnum_1 = require("../../../../enums/QoutesDetailsScalarFieldEnum");
let FindFirstQoutesDetailsOrThrowArgs = exports.FindFirstQoutesDetailsOrThrowArgs = class FindFirstQoutesDetailsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereInput_1.QoutesDetailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereInput_1.QoutesDetailsWhereInput)
], FindFirstQoutesDetailsOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsOrderByWithRelationInput_1.QoutesDetailsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstQoutesDetailsOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput)
], FindFirstQoutesDetailsOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstQoutesDetailsOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstQoutesDetailsOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsScalarFieldEnum_1.QoutesDetailsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstQoutesDetailsOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstQoutesDetailsOrThrowArgs = FindFirstQoutesDetailsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstQoutesDetailsOrThrowArgs);
