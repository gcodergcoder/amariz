"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateWithoutQoutesDetailsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateNestedOneWithoutQoutesInput_1 = require("../inputs/AgentProviderCreateNestedOneWithoutQoutesInput");
const ProvidersCreateNestedOneWithoutQuotesInput_1 = require("../inputs/ProvidersCreateNestedOneWithoutQuotesInput");
let QoutesCreateWithoutQoutesDetailsInput = exports.QoutesCreateWithoutQoutesDetailsInput = class QoutesCreateWithoutQoutesDetailsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesCreateWithoutQoutesDetailsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateWithoutQoutesDetailsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateWithoutQoutesDetailsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateWithoutQoutesDetailsInput.prototype, "expireAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateNestedOneWithoutQuotesInput_1.ProvidersCreateNestedOneWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateNestedOneWithoutQuotesInput_1.ProvidersCreateNestedOneWithoutQuotesInput)
], QoutesCreateWithoutQoutesDetailsInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateNestedOneWithoutQoutesInput_1.AgentProviderCreateNestedOneWithoutQoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateNestedOneWithoutQoutesInput_1.AgentProviderCreateNestedOneWithoutQoutesInput)
], QoutesCreateWithoutQoutesDetailsInput.prototype, "agentProvider", void 0);
exports.QoutesCreateWithoutQoutesDetailsInput = QoutesCreateWithoutQoutesDetailsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateWithoutQoutesDetailsInput", {})
], QoutesCreateWithoutQoutesDetailsInput);
