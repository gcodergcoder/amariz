"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCountOrderByAggregateInput_1 = require("../inputs/QoutesCountOrderByAggregateInput");
const QoutesMaxOrderByAggregateInput_1 = require("../inputs/QoutesMaxOrderByAggregateInput");
const QoutesMinOrderByAggregateInput_1 = require("../inputs/QoutesMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let QoutesOrderByWithAggregationInput = exports.QoutesOrderByWithAggregationInput = class QoutesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesOrderByWithAggregationInput.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesOrderByWithAggregationInput.prototype, "agentProviderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCountOrderByAggregateInput_1.QoutesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCountOrderByAggregateInput_1.QoutesCountOrderByAggregateInput)
], QoutesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesMaxOrderByAggregateInput_1.QoutesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesMaxOrderByAggregateInput_1.QoutesMaxOrderByAggregateInput)
], QoutesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesMinOrderByAggregateInput_1.QoutesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesMinOrderByAggregateInput_1.QoutesMinOrderByAggregateInput)
], QoutesOrderByWithAggregationInput.prototype, "_min", void 0);
exports.QoutesOrderByWithAggregationInput = QoutesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesOrderByWithAggregationInput", {})
], QoutesOrderByWithAggregationInput);
