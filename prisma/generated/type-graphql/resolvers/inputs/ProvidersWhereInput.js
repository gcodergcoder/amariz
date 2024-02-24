"use strict";
var ProvidersWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderListRelationFilter_1 = require("../inputs/AgentProviderListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ProvidersWhereInput = exports.ProvidersWhereInput = ProvidersWhereInput_1 = class ProvidersWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProvidersWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProvidersWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProvidersWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ProvidersWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProvidersWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProvidersWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProvidersWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProvidersWhereInput.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProvidersWhereInput.prototype, "addredd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderListRelationFilter_1.AgentProviderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderListRelationFilter_1.AgentProviderListRelationFilter)
], ProvidersWhereInput.prototype, "agentProvider", void 0);
exports.ProvidersWhereInput = ProvidersWhereInput = ProvidersWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersWhereInput", {})
], ProvidersWhereInput);
