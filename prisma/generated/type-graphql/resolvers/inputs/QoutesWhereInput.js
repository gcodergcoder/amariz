"use strict";
var QoutesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderRelationFilter_1 = require("../inputs/AgentProviderRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ProvidersRelationFilter_1 = require("../inputs/ProvidersRelationFilter");
const QoutesDetailsListRelationFilter_1 = require("../inputs/QoutesDetailsListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let QoutesWhereInput = exports.QoutesWhereInput = QoutesWhereInput_1 = class QoutesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QoutesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QoutesWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QoutesWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QoutesWhereInput.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QoutesWhereInput.prototype, "agentProviderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersRelationFilter_1.ProvidersRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersRelationFilter_1.ProvidersRelationFilter)
], QoutesWhereInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderRelationFilter_1.AgentProviderRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderRelationFilter_1.AgentProviderRelationFilter)
], QoutesWhereInput.prototype, "agentProvider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsListRelationFilter_1.QoutesDetailsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsListRelationFilter_1.QoutesDetailsListRelationFilter)
], QoutesWhereInput.prototype, "qoutesDetails", void 0);
exports.QoutesWhereInput = QoutesWhereInput = QoutesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesWhereInput", {})
], QoutesWhereInput);
