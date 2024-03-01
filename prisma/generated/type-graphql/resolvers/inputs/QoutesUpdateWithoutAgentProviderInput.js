"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpdateWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProvidersUpdateOneRequiredWithoutQuotesNestedInput_1 = require("../inputs/ProvidersUpdateOneRequiredWithoutQuotesNestedInput");
const QoutesDetailsUpdateManyWithoutQoutesNestedInput_1 = require("../inputs/QoutesDetailsUpdateManyWithoutQoutesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let QoutesUpdateWithoutAgentProviderInput = exports.QoutesUpdateWithoutAgentProviderInput = class QoutesUpdateWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], QoutesUpdateWithoutAgentProviderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], QoutesUpdateWithoutAgentProviderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], QoutesUpdateWithoutAgentProviderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateOneRequiredWithoutQuotesNestedInput_1.ProvidersUpdateOneRequiredWithoutQuotesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateOneRequiredWithoutQuotesNestedInput_1.ProvidersUpdateOneRequiredWithoutQuotesNestedInput)
], QoutesUpdateWithoutAgentProviderInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsUpdateManyWithoutQoutesNestedInput_1.QoutesDetailsUpdateManyWithoutQoutesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsUpdateManyWithoutQoutesNestedInput_1.QoutesDetailsUpdateManyWithoutQoutesNestedInput)
], QoutesUpdateWithoutAgentProviderInput.prototype, "qoutesDetails", void 0);
exports.QoutesUpdateWithoutAgentProviderInput = QoutesUpdateWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpdateWithoutAgentProviderInput", {})
], QoutesUpdateWithoutAgentProviderInput);
