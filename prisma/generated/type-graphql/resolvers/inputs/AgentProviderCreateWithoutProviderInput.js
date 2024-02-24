"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCreateWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AgentProviderCreateWithoutProviderInput = exports.AgentProviderCreateWithoutProviderInput = class AgentProviderCreateWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateWithoutProviderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProviderCreateWithoutProviderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProviderCreateWithoutProviderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateWithoutProviderInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateWithoutProviderInput.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateWithoutProviderInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateWithoutProviderInput.prototype, "phone", void 0);
exports.AgentProviderCreateWithoutProviderInput = AgentProviderCreateWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderCreateWithoutProviderInput", {})
], AgentProviderCreateWithoutProviderInput);
