"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let QoutesDetailsAvgOrderByAggregateInput = exports.QoutesDetailsAvgOrderByAggregateInput = class QoutesDetailsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsAvgOrderByAggregateInput.prototype, "unit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsAvgOrderByAggregateInput.prototype, "price", void 0);
exports.QoutesDetailsAvgOrderByAggregateInput = QoutesDetailsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsAvgOrderByAggregateInput", {})
], QoutesDetailsAvgOrderByAggregateInput);
