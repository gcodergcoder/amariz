"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateNestedOneWithoutQuotesInput_1 = require("../inputs/ProvidersCreateNestedOneWithoutQuotesInput");
const QoutesDetailsCreateNestedManyWithoutQoutesInput_1 = require("../inputs/QoutesDetailsCreateNestedManyWithoutQoutesInput");
let QoutesCreateWithoutAgentProviderInput = exports.QoutesCreateWithoutAgentProviderInput = class QoutesCreateWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesCreateWithoutAgentProviderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateWithoutAgentProviderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateWithoutAgentProviderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateWithoutAgentProviderInput.prototype, "expireAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateNestedOneWithoutQuotesInput_1.ProvidersCreateNestedOneWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateNestedOneWithoutQuotesInput_1.ProvidersCreateNestedOneWithoutQuotesInput)
], QoutesCreateWithoutAgentProviderInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCreateNestedManyWithoutQoutesInput_1.QoutesDetailsCreateNestedManyWithoutQoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCreateNestedManyWithoutQoutesInput_1.QoutesDetailsCreateNestedManyWithoutQoutesInput)
], QoutesCreateWithoutAgentProviderInput.prototype, "qoutesDetails", void 0);
exports.QoutesCreateWithoutAgentProviderInput = QoutesCreateWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateWithoutAgentProviderInput", {})
], QoutesCreateWithoutAgentProviderInput);
