"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCreateWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateNestedOneWithoutAgentProviderInput_1 = require("../inputs/ProvidersCreateNestedOneWithoutAgentProviderInput");
let AgentProviderCreateWithoutQoutesInput = exports.AgentProviderCreateWithoutQoutesInput = class AgentProviderCreateWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateWithoutQoutesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProviderCreateWithoutQoutesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProviderCreateWithoutQoutesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateWithoutQoutesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateWithoutQoutesInput.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateWithoutQoutesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateWithoutQoutesInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateNestedOneWithoutAgentProviderInput_1.ProvidersCreateNestedOneWithoutAgentProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateNestedOneWithoutAgentProviderInput_1.ProvidersCreateNestedOneWithoutAgentProviderInput)
], AgentProviderCreateWithoutQoutesInput.prototype, "provider", void 0);
exports.AgentProviderCreateWithoutQoutesInput = AgentProviderCreateWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderCreateWithoutQoutesInput", {})
], AgentProviderCreateWithoutQoutesInput);
