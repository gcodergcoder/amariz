"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpdateWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderUpdateOneRequiredWithoutQoutesNestedInput_1 = require("../inputs/AgentProviderUpdateOneRequiredWithoutQoutesNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const QoutesDetailsUpdateManyWithoutQoutesNestedInput_1 = require("../inputs/QoutesDetailsUpdateManyWithoutQoutesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let QoutesUpdateWithoutProviderInput = exports.QoutesUpdateWithoutProviderInput = class QoutesUpdateWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], QoutesUpdateWithoutProviderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], QoutesUpdateWithoutProviderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], QoutesUpdateWithoutProviderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateOneRequiredWithoutQoutesNestedInput_1.AgentProviderUpdateOneRequiredWithoutQoutesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateOneRequiredWithoutQoutesNestedInput_1.AgentProviderUpdateOneRequiredWithoutQoutesNestedInput)
], QoutesUpdateWithoutProviderInput.prototype, "agentProvider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsUpdateManyWithoutQoutesNestedInput_1.QoutesDetailsUpdateManyWithoutQoutesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsUpdateManyWithoutQoutesNestedInput_1.QoutesDetailsUpdateManyWithoutQoutesNestedInput)
], QoutesUpdateWithoutProviderInput.prototype, "qoutesDetails", void 0);
exports.QoutesUpdateWithoutProviderInput = QoutesUpdateWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpdateWithoutProviderInput", {})
], QoutesUpdateWithoutProviderInput);
