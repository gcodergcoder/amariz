"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersUpdateWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const QoutesUpdateManyWithoutProviderNestedInput_1 = require("../inputs/QoutesUpdateManyWithoutProviderNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProvidersUpdateWithoutAgentProviderInput = exports.ProvidersUpdateWithoutAgentProviderInput = class ProvidersUpdateWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProvidersUpdateWithoutAgentProviderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProvidersUpdateWithoutAgentProviderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProvidersUpdateWithoutAgentProviderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProvidersUpdateWithoutAgentProviderInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProvidersUpdateWithoutAgentProviderInput.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProvidersUpdateWithoutAgentProviderInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateManyWithoutProviderNestedInput_1.QoutesUpdateManyWithoutProviderNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesUpdateManyWithoutProviderNestedInput_1.QoutesUpdateManyWithoutProviderNestedInput)
], ProvidersUpdateWithoutAgentProviderInput.prototype, "quotes", void 0);
exports.ProvidersUpdateWithoutAgentProviderInput = ProvidersUpdateWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersUpdateWithoutAgentProviderInput", {})
], ProvidersUpdateWithoutAgentProviderInput);
