"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderOrderByWithRelationInput_1 = require("../inputs/AgentProviderOrderByWithRelationInput");
const ProvidersOrderByWithRelationInput_1 = require("../inputs/ProvidersOrderByWithRelationInput");
const QoutesDetailsOrderByRelationAggregateInput_1 = require("../inputs/QoutesDetailsOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let QoutesOrderByWithRelationInput = exports.QoutesOrderByWithRelationInput = class QoutesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesOrderByWithRelationInput.prototype, "expireAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesOrderByWithRelationInput.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesOrderByWithRelationInput.prototype, "agentProviderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersOrderByWithRelationInput_1.ProvidersOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersOrderByWithRelationInput_1.ProvidersOrderByWithRelationInput)
], QoutesOrderByWithRelationInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderOrderByWithRelationInput_1.AgentProviderOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderOrderByWithRelationInput_1.AgentProviderOrderByWithRelationInput)
], QoutesOrderByWithRelationInput.prototype, "agentProvider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsOrderByRelationAggregateInput_1.QoutesDetailsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsOrderByRelationAggregateInput_1.QoutesDetailsOrderByRelationAggregateInput)
], QoutesOrderByWithRelationInput.prototype, "qoutesDetails", void 0);
exports.QoutesOrderByWithRelationInput = QoutesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesOrderByWithRelationInput", {})
], QoutesOrderByWithRelationInput);
