"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersCreateWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateNestedManyWithoutProviderInput_1 = require("../inputs/AgentProviderCreateNestedManyWithoutProviderInput");
let ProvidersCreateWithoutQuotesInput = exports.ProvidersCreateWithoutQuotesInput = class ProvidersCreateWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateWithoutQuotesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProvidersCreateWithoutQuotesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProvidersCreateWithoutQuotesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateWithoutQuotesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateWithoutQuotesInput.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateWithoutQuotesInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateNestedManyWithoutProviderInput_1.AgentProviderCreateNestedManyWithoutProviderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateNestedManyWithoutProviderInput_1.AgentProviderCreateNestedManyWithoutProviderInput)
], ProvidersCreateWithoutQuotesInput.prototype, "agentProvider", void 0);
exports.ProvidersCreateWithoutQuotesInput = ProvidersCreateWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersCreateWithoutQuotesInput", {})
], ProvidersCreateWithoutQuotesInput);
