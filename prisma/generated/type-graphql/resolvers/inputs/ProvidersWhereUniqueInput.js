"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderListRelationFilter_1 = require("../inputs/AgentProviderListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ProvidersWhereInput_1 = require("../inputs/ProvidersWhereInput");
const QoutesListRelationFilter_1 = require("../inputs/QoutesListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ProvidersWhereUniqueInput = exports.ProvidersWhereUniqueInput = class ProvidersWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersWhereInput_1.ProvidersWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProvidersWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersWhereInput_1.ProvidersWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProvidersWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersWhereInput_1.ProvidersWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProvidersWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProvidersWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProvidersWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProvidersWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProvidersWhereUniqueInput.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProvidersWhereUniqueInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderListRelationFilter_1.AgentProviderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderListRelationFilter_1.AgentProviderListRelationFilter)
], ProvidersWhereUniqueInput.prototype, "agentProvider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesListRelationFilter_1.QoutesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesListRelationFilter_1.QoutesListRelationFilter)
], ProvidersWhereUniqueInput.prototype, "quotes", void 0);
exports.ProvidersWhereUniqueInput = ProvidersWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersWhereUniqueInput", {})
], ProvidersWhereUniqueInput);
