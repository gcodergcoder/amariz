"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersOrderByWithRelationInput_1 = require("../inputs/ProvidersOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AgentProviderOrderByWithRelationInput = exports.AgentProviderOrderByWithRelationInput = class AgentProviderOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithRelationInput.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithRelationInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderOrderByWithRelationInput.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersOrderByWithRelationInput_1.ProvidersOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersOrderByWithRelationInput_1.ProvidersOrderByWithRelationInput)
], AgentProviderOrderByWithRelationInput.prototype, "provider", void 0);
exports.AgentProviderOrderByWithRelationInput = AgentProviderOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderOrderByWithRelationInput", {})
], AgentProviderOrderByWithRelationInput);
