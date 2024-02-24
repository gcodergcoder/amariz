"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAgentProviderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderOrderByWithAggregationInput_1 = require("../../../inputs/AgentProviderOrderByWithAggregationInput");
const AgentProviderScalarWhereWithAggregatesInput_1 = require("../../../inputs/AgentProviderScalarWhereWithAggregatesInput");
const AgentProviderWhereInput_1 = require("../../../inputs/AgentProviderWhereInput");
const AgentProviderScalarFieldEnum_1 = require("../../../../enums/AgentProviderScalarFieldEnum");
let GroupByAgentProviderArgs = exports.GroupByAgentProviderArgs = class GroupByAgentProviderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], GroupByAgentProviderArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderOrderByWithAggregationInput_1.AgentProviderOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAgentProviderArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderScalarFieldEnum_1.AgentProviderScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAgentProviderArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderScalarWhereWithAggregatesInput_1.AgentProviderScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderScalarWhereWithAggregatesInput_1.AgentProviderScalarWhereWithAggregatesInput)
], GroupByAgentProviderArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAgentProviderArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAgentProviderArgs.prototype, "skip", void 0);
exports.GroupByAgentProviderArgs = GroupByAgentProviderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAgentProviderArgs);
