"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderUpdateManyWithoutProviderNestedInput_1 = require("../inputs/AgentProviderUpdateManyWithoutProviderNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProvidersUpdateInput = exports.ProvidersUpdateInput = class ProvidersUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProvidersUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProvidersUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProvidersUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProvidersUpdateInput.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProvidersUpdateInput.prototype, "addredd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateManyWithoutProviderNestedInput_1.AgentProviderUpdateManyWithoutProviderNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateManyWithoutProviderNestedInput_1.AgentProviderUpdateManyWithoutProviderNestedInput)
], ProvidersUpdateInput.prototype, "agentProvider", void 0);
exports.ProvidersUpdateInput = ProvidersUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersUpdateInput", {})
], ProvidersUpdateInput);
