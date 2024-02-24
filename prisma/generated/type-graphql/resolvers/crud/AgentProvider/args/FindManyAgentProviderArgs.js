"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAgentProviderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderOrderByWithRelationInput_1 = require("../../../inputs/AgentProviderOrderByWithRelationInput");
const AgentProviderWhereInput_1 = require("../../../inputs/AgentProviderWhereInput");
const AgentProviderWhereUniqueInput_1 = require("../../../inputs/AgentProviderWhereUniqueInput");
const AgentProviderScalarFieldEnum_1 = require("../../../../enums/AgentProviderScalarFieldEnum");
let FindManyAgentProviderArgs = exports.FindManyAgentProviderArgs = class FindManyAgentProviderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], FindManyAgentProviderArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderOrderByWithRelationInput_1.AgentProviderOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAgentProviderArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], FindManyAgentProviderArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAgentProviderArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAgentProviderArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderScalarFieldEnum_1.AgentProviderScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAgentProviderArgs.prototype, "distinct", void 0);
exports.FindManyAgentProviderArgs = FindManyAgentProviderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyAgentProviderArgs);
