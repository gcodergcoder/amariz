"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsAvgOrderByAggregateInput_1 = require("../inputs/QoutesDetailsAvgOrderByAggregateInput");
const QoutesDetailsCountOrderByAggregateInput_1 = require("../inputs/QoutesDetailsCountOrderByAggregateInput");
const QoutesDetailsMaxOrderByAggregateInput_1 = require("../inputs/QoutesDetailsMaxOrderByAggregateInput");
const QoutesDetailsMinOrderByAggregateInput_1 = require("../inputs/QoutesDetailsMinOrderByAggregateInput");
const QoutesDetailsSumOrderByAggregateInput_1 = require("../inputs/QoutesDetailsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let QoutesDetailsOrderByWithAggregationInput = exports.QoutesDetailsOrderByWithAggregationInput = class QoutesDetailsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithAggregationInput.prototype, "unit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithAggregationInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithAggregationInput.prototype, "quotesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCountOrderByAggregateInput_1.QoutesDetailsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCountOrderByAggregateInput_1.QoutesDetailsCountOrderByAggregateInput)
], QoutesDetailsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsAvgOrderByAggregateInput_1.QoutesDetailsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsAvgOrderByAggregateInput_1.QoutesDetailsAvgOrderByAggregateInput)
], QoutesDetailsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsMaxOrderByAggregateInput_1.QoutesDetailsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsMaxOrderByAggregateInput_1.QoutesDetailsMaxOrderByAggregateInput)
], QoutesDetailsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsMinOrderByAggregateInput_1.QoutesDetailsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsMinOrderByAggregateInput_1.QoutesDetailsMinOrderByAggregateInput)
], QoutesDetailsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsSumOrderByAggregateInput_1.QoutesDetailsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsSumOrderByAggregateInput_1.QoutesDetailsSumOrderByAggregateInput)
], QoutesDetailsOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.QoutesDetailsOrderByWithAggregationInput = QoutesDetailsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsOrderByWithAggregationInput", {})
], QoutesDetailsOrderByWithAggregationInput);
