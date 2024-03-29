"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProvider = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCount_1 = require("../resolvers/outputs/AgentProviderCount");
let AgentProvider = exports.AgentProvider = class AgentProvider {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProvider.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProvider.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProvider.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProvider.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProvider.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProvider.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProvider.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProvider.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCount_1.AgentProviderCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCount_1.AgentProviderCount)
], AgentProvider.prototype, "_count", void 0);
exports.AgentProvider = AgentProvider = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AgentProvider", {})
], AgentProvider);
