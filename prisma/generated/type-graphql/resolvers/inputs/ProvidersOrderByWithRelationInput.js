"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderOrderByRelationAggregateInput_1 = require("../inputs/AgentProviderOrderByRelationAggregateInput");
const QoutesOrderByRelationAggregateInput_1 = require("../inputs/QoutesOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProvidersOrderByWithRelationInput = exports.ProvidersOrderByWithRelationInput = class ProvidersOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithRelationInput.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersOrderByWithRelationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderOrderByRelationAggregateInput_1.AgentProviderOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderOrderByRelationAggregateInput_1.AgentProviderOrderByRelationAggregateInput)
], ProvidersOrderByWithRelationInput.prototype, "agentProvider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesOrderByRelationAggregateInput_1.QoutesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesOrderByRelationAggregateInput_1.QoutesOrderByRelationAggregateInput)
], ProvidersOrderByWithRelationInput.prototype, "quotes", void 0);
exports.ProvidersOrderByWithRelationInput = ProvidersOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersOrderByWithRelationInput", {})
], ProvidersOrderByWithRelationInput);
