"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateNestedOneWithoutAgentProviderInput_1 = require("../inputs/ProvidersCreateNestedOneWithoutAgentProviderInput");
const QoutesCreateNestedManyWithoutAgentProviderInput_1 = require("../inputs/QoutesCreateNestedManyWithoutAgentProviderInput");
let AgentProviderCreateInput = exports.AgentProviderCreateInput = class AgentProviderCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProviderCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProviderCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateInput.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateNestedOneWithoutAgentProviderInput_1.ProvidersCreateNestedOneWithoutAgentProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateNestedOneWithoutAgentProviderInput_1.ProvidersCreateNestedOneWithoutAgentProviderInput)
], AgentProviderCreateInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateNestedManyWithoutAgentProviderInput_1.QoutesCreateNestedManyWithoutAgentProviderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCreateNestedManyWithoutAgentProviderInput_1.QoutesCreateNestedManyWithoutAgentProviderInput)
], AgentProviderCreateInput.prototype, "qoutes", void 0);
exports.AgentProviderCreateInput = AgentProviderCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderCreateInput", {})
], AgentProviderCreateInput);
