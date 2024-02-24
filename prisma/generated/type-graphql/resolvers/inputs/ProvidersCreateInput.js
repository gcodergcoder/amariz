"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateNestedManyWithoutProviderInput_1 = require("../inputs/AgentProviderCreateNestedManyWithoutProviderInput");
let ProvidersCreateInput = exports.ProvidersCreateInput = class ProvidersCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProvidersCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProvidersCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateInput.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateNestedManyWithoutProviderInput_1.AgentProviderCreateNestedManyWithoutProviderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateNestedManyWithoutProviderInput_1.AgentProviderCreateNestedManyWithoutProviderInput)
], ProvidersCreateInput.prototype, "agentProvider", void 0);
exports.ProvidersCreateInput = ProvidersCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersCreateInput", {})
], ProvidersCreateInput);
