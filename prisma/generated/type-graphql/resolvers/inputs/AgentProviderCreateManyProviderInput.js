"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCreateManyProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AgentProviderCreateManyProviderInput = exports.AgentProviderCreateManyProviderInput = class AgentProviderCreateManyProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AgentProviderCreateManyProviderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProviderCreateManyProviderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProviderCreateManyProviderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateManyProviderInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateManyProviderInput.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateManyProviderInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderCreateManyProviderInput.prototype, "phone", void 0);
exports.AgentProviderCreateManyProviderInput = AgentProviderCreateManyProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderCreateManyProviderInput", {})
], AgentProviderCreateManyProviderInput);
