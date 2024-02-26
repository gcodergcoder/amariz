"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpdateWithoutQoutesDetailsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderUpdateOneRequiredWithoutQoutesNestedInput_1 = require("../inputs/AgentProviderUpdateOneRequiredWithoutQoutesNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProvidersUpdateOneRequiredWithoutQuotesNestedInput_1 = require("../inputs/ProvidersUpdateOneRequiredWithoutQuotesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let QoutesUpdateWithoutQoutesDetailsInput = exports.QoutesUpdateWithoutQoutesDetailsInput = class QoutesUpdateWithoutQoutesDetailsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], QoutesUpdateWithoutQoutesDetailsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], QoutesUpdateWithoutQoutesDetailsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], QoutesUpdateWithoutQoutesDetailsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateOneRequiredWithoutQuotesNestedInput_1.ProvidersUpdateOneRequiredWithoutQuotesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateOneRequiredWithoutQuotesNestedInput_1.ProvidersUpdateOneRequiredWithoutQuotesNestedInput)
], QoutesUpdateWithoutQoutesDetailsInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateOneRequiredWithoutQoutesNestedInput_1.AgentProviderUpdateOneRequiredWithoutQoutesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateOneRequiredWithoutQoutesNestedInput_1.AgentProviderUpdateOneRequiredWithoutQoutesNestedInput)
], QoutesUpdateWithoutQoutesDetailsInput.prototype, "agentProvider", void 0);
exports.QoutesUpdateWithoutQoutesDetailsInput = QoutesUpdateWithoutQoutesDetailsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpdateWithoutQoutesDetailsInput", {})
], QoutesUpdateWithoutQoutesDetailsInput);
