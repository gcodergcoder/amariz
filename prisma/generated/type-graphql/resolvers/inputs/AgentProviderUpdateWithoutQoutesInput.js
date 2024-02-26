"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderUpdateWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput_1 = require("../inputs/ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AgentProviderUpdateWithoutQoutesInput = exports.AgentProviderUpdateWithoutQoutesInput = class AgentProviderUpdateWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AgentProviderUpdateWithoutQoutesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AgentProviderUpdateWithoutQoutesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AgentProviderUpdateWithoutQoutesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AgentProviderUpdateWithoutQoutesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AgentProviderUpdateWithoutQoutesInput.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AgentProviderUpdateWithoutQoutesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AgentProviderUpdateWithoutQoutesInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput_1.ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput_1.ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput)
], AgentProviderUpdateWithoutQoutesInput.prototype, "provider", void 0);
exports.AgentProviderUpdateWithoutQoutesInput = AgentProviderUpdateWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderUpdateWithoutQoutesInput", {})
], AgentProviderUpdateWithoutQoutesInput);
