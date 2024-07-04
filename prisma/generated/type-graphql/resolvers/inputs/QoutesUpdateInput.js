"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderUpdateOneRequiredWithoutQoutesNestedInput_1 = require("../inputs/AgentProviderUpdateOneRequiredWithoutQoutesNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProvidersUpdateOneRequiredWithoutQuotesNestedInput_1 = require("../inputs/ProvidersUpdateOneRequiredWithoutQuotesNestedInput");
const QoutesDetailsUpdateManyWithoutQoutesNestedInput_1 = require("../inputs/QoutesDetailsUpdateManyWithoutQoutesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let QoutesUpdateInput = exports.QoutesUpdateInput = class QoutesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], QoutesUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], QoutesUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], QoutesUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], QoutesUpdateInput.prototype, "expireAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateOneRequiredWithoutQuotesNestedInput_1.ProvidersUpdateOneRequiredWithoutQuotesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateOneRequiredWithoutQuotesNestedInput_1.ProvidersUpdateOneRequiredWithoutQuotesNestedInput)
], QoutesUpdateInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateOneRequiredWithoutQoutesNestedInput_1.AgentProviderUpdateOneRequiredWithoutQoutesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateOneRequiredWithoutQoutesNestedInput_1.AgentProviderUpdateOneRequiredWithoutQoutesNestedInput)
], QoutesUpdateInput.prototype, "agentProvider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsUpdateManyWithoutQoutesNestedInput_1.QoutesDetailsUpdateManyWithoutQoutesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsUpdateManyWithoutQoutesNestedInput_1.QoutesDetailsUpdateManyWithoutQoutesNestedInput)
], QoutesUpdateInput.prototype, "qoutesDetails", void 0);
exports.QoutesUpdateInput = QoutesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpdateInput", {})
], QoutesUpdateInput);
