"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderWhereInput_1 = require("../inputs/AgentProviderWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ProvidersRelationFilter_1 = require("../inputs/ProvidersRelationFilter");
const QoutesListRelationFilter_1 = require("../inputs/QoutesListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let AgentProviderWhereUniqueInput = exports.AgentProviderWhereUniqueInput = class AgentProviderWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderWhereUniqueInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderWhereInput_1.AgentProviderWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderWhereInput_1.AgentProviderWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderWhereInput_1.AgentProviderWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AgentProviderWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AgentProviderWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AgentProviderWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AgentProviderWhereUniqueInput.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AgentProviderWhereUniqueInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AgentProviderWhereUniqueInput.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersRelationFilter_1.ProvidersRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersRelationFilter_1.ProvidersRelationFilter)
], AgentProviderWhereUniqueInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesListRelationFilter_1.QoutesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesListRelationFilter_1.QoutesListRelationFilter)
], AgentProviderWhereUniqueInput.prototype, "qoutes", void 0);
exports.AgentProviderWhereUniqueInput = AgentProviderWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderWhereUniqueInput", {})
], AgentProviderWhereUniqueInput);
