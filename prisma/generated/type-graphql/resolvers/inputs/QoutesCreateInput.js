"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateNestedOneWithoutQoutesInput_1 = require("../inputs/AgentProviderCreateNestedOneWithoutQoutesInput");
const ProvidersCreateNestedOneWithoutQuotesInput_1 = require("../inputs/ProvidersCreateNestedOneWithoutQuotesInput");
const QoutesDetailsCreateNestedManyWithoutQoutesInput_1 = require("../inputs/QoutesDetailsCreateNestedManyWithoutQoutesInput");
let QoutesCreateInput = exports.QoutesCreateInput = class QoutesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateInput.prototype, "expireAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateNestedOneWithoutQuotesInput_1.ProvidersCreateNestedOneWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateNestedOneWithoutQuotesInput_1.ProvidersCreateNestedOneWithoutQuotesInput)
], QoutesCreateInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateNestedOneWithoutQoutesInput_1.AgentProviderCreateNestedOneWithoutQoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateNestedOneWithoutQoutesInput_1.AgentProviderCreateNestedOneWithoutQoutesInput)
], QoutesCreateInput.prototype, "agentProvider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCreateNestedManyWithoutQoutesInput_1.QoutesDetailsCreateNestedManyWithoutQoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCreateNestedManyWithoutQoutesInput_1.QoutesDetailsCreateNestedManyWithoutQoutesInput)
], QoutesCreateInput.prototype, "qoutesDetails", void 0);
exports.QoutesCreateInput = QoutesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateInput", {})
], QoutesCreateInput);
