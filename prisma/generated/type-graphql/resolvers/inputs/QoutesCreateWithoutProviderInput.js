"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateNestedOneWithoutQoutesInput_1 = require("../inputs/AgentProviderCreateNestedOneWithoutQoutesInput");
const QoutesDetailsCreateNestedManyWithoutQoutesInput_1 = require("../inputs/QoutesDetailsCreateNestedManyWithoutQoutesInput");
let QoutesCreateWithoutProviderInput = exports.QoutesCreateWithoutProviderInput = class QoutesCreateWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesCreateWithoutProviderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateWithoutProviderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateWithoutProviderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateNestedOneWithoutQoutesInput_1.AgentProviderCreateNestedOneWithoutQoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateNestedOneWithoutQoutesInput_1.AgentProviderCreateNestedOneWithoutQoutesInput)
], QoutesCreateWithoutProviderInput.prototype, "agentProvider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCreateNestedManyWithoutQoutesInput_1.QoutesDetailsCreateNestedManyWithoutQoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCreateNestedManyWithoutQoutesInput_1.QoutesDetailsCreateNestedManyWithoutQoutesInput)
], QoutesCreateWithoutProviderInput.prototype, "qoutesDetails", void 0);
exports.QoutesCreateWithoutProviderInput = QoutesCreateWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateWithoutProviderInput", {})
], QoutesCreateWithoutProviderInput);
