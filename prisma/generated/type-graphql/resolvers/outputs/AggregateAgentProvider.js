"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAgentProvider = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderAvgAggregate_1 = require("../outputs/AgentProviderAvgAggregate");
const AgentProviderCountAggregate_1 = require("../outputs/AgentProviderCountAggregate");
const AgentProviderMaxAggregate_1 = require("../outputs/AgentProviderMaxAggregate");
const AgentProviderMinAggregate_1 = require("../outputs/AgentProviderMinAggregate");
const AgentProviderSumAggregate_1 = require("../outputs/AgentProviderSumAggregate");
let AggregateAgentProvider = exports.AggregateAgentProvider = class AggregateAgentProvider {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCountAggregate_1.AgentProviderCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCountAggregate_1.AgentProviderCountAggregate)
], AggregateAgentProvider.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderAvgAggregate_1.AgentProviderAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderAvgAggregate_1.AgentProviderAvgAggregate)
], AggregateAgentProvider.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderSumAggregate_1.AgentProviderSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderSumAggregate_1.AgentProviderSumAggregate)
], AggregateAgentProvider.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderMinAggregate_1.AgentProviderMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderMinAggregate_1.AgentProviderMinAggregate)
], AggregateAgentProvider.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderMaxAggregate_1.AgentProviderMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderMaxAggregate_1.AgentProviderMaxAggregate)
], AggregateAgentProvider.prototype, "_max", void 0);
exports.AggregateAgentProvider = AggregateAgentProvider = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAgentProvider", {})
], AggregateAgentProvider);
