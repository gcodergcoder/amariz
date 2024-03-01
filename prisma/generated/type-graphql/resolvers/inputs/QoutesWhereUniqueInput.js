"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderRelationFilter_1 = require("../inputs/AgentProviderRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ProvidersRelationFilter_1 = require("../inputs/ProvidersRelationFilter");
const QoutesDetailsListRelationFilter_1 = require("../inputs/QoutesDetailsListRelationFilter");
const QoutesWhereInput_1 = require("../inputs/QoutesWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let QoutesWhereUniqueInput = exports.QoutesWhereUniqueInput = class QoutesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereInput_1.QoutesWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereInput_1.QoutesWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereInput_1.QoutesWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QoutesWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QoutesWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QoutesWhereUniqueInput.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QoutesWhereUniqueInput.prototype, "agentProviderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersRelationFilter_1.ProvidersRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersRelationFilter_1.ProvidersRelationFilter)
], QoutesWhereUniqueInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderRelationFilter_1.AgentProviderRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderRelationFilter_1.AgentProviderRelationFilter)
], QoutesWhereUniqueInput.prototype, "agentProvider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsListRelationFilter_1.QoutesDetailsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsListRelationFilter_1.QoutesDetailsListRelationFilter)
], QoutesWhereUniqueInput.prototype, "qoutesDetails", void 0);
exports.QoutesWhereUniqueInput = QoutesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesWhereUniqueInput", {})
], QoutesWhereUniqueInput);
