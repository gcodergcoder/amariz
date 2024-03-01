"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersUpdateWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderUpdateManyWithoutProviderNestedInput_1 = require("../inputs/AgentProviderUpdateManyWithoutProviderNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProvidersUpdateWithoutQuotesInput = exports.ProvidersUpdateWithoutQuotesInput = class ProvidersUpdateWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProvidersUpdateWithoutQuotesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProvidersUpdateWithoutQuotesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProvidersUpdateWithoutQuotesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProvidersUpdateWithoutQuotesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProvidersUpdateWithoutQuotesInput.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProvidersUpdateWithoutQuotesInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateManyWithoutProviderNestedInput_1.AgentProviderUpdateManyWithoutProviderNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateManyWithoutProviderNestedInput_1.AgentProviderUpdateManyWithoutProviderNestedInput)
], ProvidersUpdateWithoutQuotesInput.prototype, "agentProvider", void 0);
exports.ProvidersUpdateWithoutQuotesInput = ProvidersUpdateWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersUpdateWithoutQuotesInput", {})
], ProvidersUpdateWithoutQuotesInput);
