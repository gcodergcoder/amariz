"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderAvgOrderByAggregateInput_1 = require("../inputs/AgentProviderAvgOrderByAggregateInput");
const AgentProviderCountOrderByAggregateInput_1 = require("../inputs/AgentProviderCountOrderByAggregateInput");
const AgentProviderMaxOrderByAggregateInput_1 = require("../inputs/AgentProviderMaxOrderByAggregateInput");
const AgentProviderMinOrderByAggregateInput_1 = require("../inputs/AgentProviderMinOrderByAggregateInput");
const AgentProviderSumOrderByAggregateInput_1 = require("../inputs/AgentProviderSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AgentProviderOrderByWithAggregationInput = exports.AgentProviderOrderByWithAggregationInput = class AgentProviderOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithAggregationInput.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithAggregationInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithAggregationInput.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCountOrderByAggregateInput_1.AgentProviderCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCountOrderByAggregateInput_1.AgentProviderCountOrderByAggregateInput)
], AgentProviderOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderAvgOrderByAggregateInput_1.AgentProviderAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderAvgOrderByAggregateInput_1.AgentProviderAvgOrderByAggregateInput)
], AgentProviderOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderMaxOrderByAggregateInput_1.AgentProviderMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderMaxOrderByAggregateInput_1.AgentProviderMaxOrderByAggregateInput)
], AgentProviderOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderMinOrderByAggregateInput_1.AgentProviderMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderMinOrderByAggregateInput_1.AgentProviderMinOrderByAggregateInput)
], AgentProviderOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderSumOrderByAggregateInput_1.AgentProviderSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderSumOrderByAggregateInput_1.AgentProviderSumOrderByAggregateInput)
], AgentProviderOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.AgentProviderOrderByWithAggregationInput = AgentProviderOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderOrderByWithAggregationInput", {})
], AgentProviderOrderByWithAggregationInput);
