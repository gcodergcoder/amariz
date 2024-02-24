"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersAvgOrderByAggregateInput_1 = require("../inputs/ProvidersAvgOrderByAggregateInput");
const ProvidersCountOrderByAggregateInput_1 = require("../inputs/ProvidersCountOrderByAggregateInput");
const ProvidersMaxOrderByAggregateInput_1 = require("../inputs/ProvidersMaxOrderByAggregateInput");
const ProvidersMinOrderByAggregateInput_1 = require("../inputs/ProvidersMinOrderByAggregateInput");
const ProvidersSumOrderByAggregateInput_1 = require("../inputs/ProvidersSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProvidersOrderByWithAggregationInput = exports.ProvidersOrderByWithAggregationInput = class ProvidersOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithAggregationInput.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithAggregationInput.prototype, "addredd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCountOrderByAggregateInput_1.ProvidersCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCountOrderByAggregateInput_1.ProvidersCountOrderByAggregateInput)
], ProvidersOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersAvgOrderByAggregateInput_1.ProvidersAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersAvgOrderByAggregateInput_1.ProvidersAvgOrderByAggregateInput)
], ProvidersOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersMaxOrderByAggregateInput_1.ProvidersMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersMaxOrderByAggregateInput_1.ProvidersMaxOrderByAggregateInput)
], ProvidersOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersMinOrderByAggregateInput_1.ProvidersMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersMinOrderByAggregateInput_1.ProvidersMinOrderByAggregateInput)
], ProvidersOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersSumOrderByAggregateInput_1.ProvidersSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersSumOrderByAggregateInput_1.ProvidersSumOrderByAggregateInput)
], ProvidersOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.ProvidersOrderByWithAggregationInput = ProvidersOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersOrderByWithAggregationInput", {})
], ProvidersOrderByWithAggregationInput);