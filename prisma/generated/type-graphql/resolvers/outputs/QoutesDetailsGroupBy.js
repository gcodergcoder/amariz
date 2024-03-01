"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsAvgAggregate_1 = require("../outputs/QoutesDetailsAvgAggregate");
const QoutesDetailsCountAggregate_1 = require("../outputs/QoutesDetailsCountAggregate");
const QoutesDetailsMaxAggregate_1 = require("../outputs/QoutesDetailsMaxAggregate");
const QoutesDetailsMinAggregate_1 = require("../outputs/QoutesDetailsMinAggregate");
const QoutesDetailsSumAggregate_1 = require("../outputs/QoutesDetailsSumAggregate");
let QoutesDetailsGroupBy = exports.QoutesDetailsGroupBy = class QoutesDetailsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesDetailsGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesDetailsGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], QoutesDetailsGroupBy.prototype, "unit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], QoutesDetailsGroupBy.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsGroupBy.prototype, "quotesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCountAggregate_1.QoutesDetailsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCountAggregate_1.QoutesDetailsCountAggregate)
], QoutesDetailsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsAvgAggregate_1.QoutesDetailsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsAvgAggregate_1.QoutesDetailsAvgAggregate)
], QoutesDetailsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsSumAggregate_1.QoutesDetailsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsSumAggregate_1.QoutesDetailsSumAggregate)
], QoutesDetailsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsMinAggregate_1.QoutesDetailsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsMinAggregate_1.QoutesDetailsMinAggregate)
], QoutesDetailsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsMaxAggregate_1.QoutesDetailsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsMaxAggregate_1.QoutesDetailsMaxAggregate)
], QoutesDetailsGroupBy.prototype, "_max", void 0);
exports.QoutesDetailsGroupBy = QoutesDetailsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("QoutesDetailsGroupBy", {})
], QoutesDetailsGroupBy);
