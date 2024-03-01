"use strict";
var QoutesDetailsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const QoutesRelationFilter_1 = require("../inputs/QoutesRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let QoutesDetailsWhereInput = exports.QoutesDetailsWhereInput = QoutesDetailsWhereInput_1 = class QoutesDetailsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QoutesDetailsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QoutesDetailsWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QoutesDetailsWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QoutesDetailsWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], QoutesDetailsWhereInput.prototype, "unit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], QoutesDetailsWhereInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QoutesDetailsWhereInput.prototype, "quotesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesRelationFilter_1.QoutesRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesRelationFilter_1.QoutesRelationFilter)
], QoutesDetailsWhereInput.prototype, "qoutes", void 0);
exports.QoutesDetailsWhereInput = QoutesDetailsWhereInput = QoutesDetailsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsWhereInput", {})
], QoutesDetailsWhereInput);
