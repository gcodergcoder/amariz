"use strict";
var AgentProviderWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProvidersRelationFilter_1 = require("../inputs/ProvidersRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let AgentProviderWhereInput = exports.AgentProviderWhereInput = AgentProviderWhereInput_1 = class AgentProviderWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AgentProviderWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AgentProviderWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AgentProviderWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AgentProviderWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AgentProviderWhereInput.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AgentProviderWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AgentProviderWhereInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AgentProviderWhereInput.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersRelationFilter_1.ProvidersRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersRelationFilter_1.ProvidersRelationFilter)
], AgentProviderWhereInput.prototype, "provider", void 0);
exports.AgentProviderWhereInput = AgentProviderWhereInput = AgentProviderWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderWhereInput", {})
], AgentProviderWhereInput);
