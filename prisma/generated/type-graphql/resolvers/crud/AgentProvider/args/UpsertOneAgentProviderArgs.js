"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAgentProviderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateInput_1 = require("../../../inputs/AgentProviderCreateInput");
const AgentProviderUpdateInput_1 = require("../../../inputs/AgentProviderUpdateInput");
const AgentProviderWhereUniqueInput_1 = require("../../../inputs/AgentProviderWhereUniqueInput");
let UpsertOneAgentProviderArgs = exports.UpsertOneAgentProviderArgs = class UpsertOneAgentProviderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], UpsertOneAgentProviderArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateInput_1.AgentProviderCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateInput_1.AgentProviderCreateInput)
], UpsertOneAgentProviderArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateInput_1.AgentProviderUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateInput_1.AgentProviderUpdateInput)
], UpsertOneAgentProviderArgs.prototype, "update", void 0);
exports.UpsertOneAgentProviderArgs = UpsertOneAgentProviderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAgentProviderArgs);
