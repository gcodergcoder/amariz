"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AgentProviderSumAggregate = exports.AgentProviderSumAggregate = class AgentProviderSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AgentProviderSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AgentProviderSumAggregate.prototype, "providerId", void 0);
exports.AgentProviderSumAggregate = AgentProviderSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AgentProviderSumAggregate", {})
], AgentProviderSumAggregate);
