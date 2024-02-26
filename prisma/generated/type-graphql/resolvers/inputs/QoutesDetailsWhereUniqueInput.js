"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const QoutesDetailsWhereInput_1 = require("../inputs/QoutesDetailsWhereInput");
const QoutesRelationFilter_1 = require("../inputs/QoutesRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let QoutesDetailsWhereUniqueInput = exports.QoutesDetailsWhereUniqueInput = class QoutesDetailsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsWhereInput_1.QoutesDetailsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsWhereInput_1.QoutesDetailsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsWhereInput_1.QoutesDetailsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QoutesDetailsWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QoutesDetailsWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QoutesDetailsWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], QoutesDetailsWhereUniqueInput.prototype, "unit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], QoutesDetailsWhereUniqueInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QoutesDetailsWhereUniqueInput.prototype, "quotesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesRelationFilter_1.QoutesRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesRelationFilter_1.QoutesRelationFilter)
], QoutesDetailsWhereUniqueInput.prototype, "qoutes", void 0);
exports.QoutesDetailsWhereUniqueInput = QoutesDetailsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsWhereUniqueInput", {})
], QoutesDetailsWhereUniqueInput);
