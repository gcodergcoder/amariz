"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersCreateWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProvidersCreateWithoutAgentProviderInput = exports.ProvidersCreateWithoutAgentProviderInput = class ProvidersCreateWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateWithoutAgentProviderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProvidersCreateWithoutAgentProviderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProvidersCreateWithoutAgentProviderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateWithoutAgentProviderInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateWithoutAgentProviderInput.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersCreateWithoutAgentProviderInput.prototype, "address", void 0);
exports.ProvidersCreateWithoutAgentProviderInput = ProvidersCreateWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersCreateWithoutAgentProviderInput", {})
], ProvidersCreateWithoutAgentProviderInput);
