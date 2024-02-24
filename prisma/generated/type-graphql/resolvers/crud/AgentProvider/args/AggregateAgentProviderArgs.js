"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAgentProviderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderOrderByWithRelationInput_1 = require("../../../inputs/AgentProviderOrderByWithRelationInput");
const AgentProviderWhereInput_1 = require("../../../inputs/AgentProviderWhereInput");
const AgentProviderWhereUniqueInput_1 = require("../../../inputs/AgentProviderWhereUniqueInput");
let AggregateAgentProviderArgs = exports.AggregateAgentProviderArgs = class AggregateAgentProviderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], AggregateAgentProviderArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderOrderByWithRelationInput_1.AgentProviderOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateAgentProviderArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], AggregateAgentProviderArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAgentProviderArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAgentProviderArgs.prototype, "skip", void 0);
exports.AggregateAgentProviderArgs = AggregateAgentProviderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateAgentProviderArgs);
