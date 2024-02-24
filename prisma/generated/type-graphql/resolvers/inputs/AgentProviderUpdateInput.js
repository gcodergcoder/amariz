"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput_1 = require("../inputs/ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AgentProviderUpdateInput = exports.AgentProviderUpdateInput = class AgentProviderUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AgentProviderUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AgentProviderUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AgentProviderUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AgentProviderUpdateInput.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AgentProviderUpdateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AgentProviderUpdateInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput_1.ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput_1.ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput)
], AgentProviderUpdateInput.prototype, "provider", void 0);
exports.AgentProviderUpdateInput = AgentProviderUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderUpdateInput", {})
], AgentProviderUpdateInput);
