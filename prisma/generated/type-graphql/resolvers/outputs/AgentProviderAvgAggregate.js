"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AgentProviderAvgAggregate = exports.AgentProviderAvgAggregate = class AgentProviderAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AgentProviderAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AgentProviderAvgAggregate.prototype, "providerId", void 0);
exports.AgentProviderAvgAggregate = AgentProviderAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AgentProviderAvgAggregate", {})
], AgentProviderAvgAggregate);
