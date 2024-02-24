"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAgentProviderOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderOrderByWithRelationInput_1 = require("../../../inputs/AgentProviderOrderByWithRelationInput");
const AgentProviderWhereInput_1 = require("../../../inputs/AgentProviderWhereInput");
const AgentProviderWhereUniqueInput_1 = require("../../../inputs/AgentProviderWhereUniqueInput");
const AgentProviderScalarFieldEnum_1 = require("../../../../enums/AgentProviderScalarFieldEnum");
let FindFirstAgentProviderOrThrowArgs = exports.FindFirstAgentProviderOrThrowArgs = class FindFirstAgentProviderOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], FindFirstAgentProviderOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderOrderByWithRelationInput_1.AgentProviderOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAgentProviderOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], FindFirstAgentProviderOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAgentProviderOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAgentProviderOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderScalarFieldEnum_1.AgentProviderScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAgentProviderOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstAgentProviderOrThrowArgs = FindFirstAgentProviderOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAgentProviderOrThrowArgs);
