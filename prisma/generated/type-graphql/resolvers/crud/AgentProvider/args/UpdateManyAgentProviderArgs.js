"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAgentProviderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderUpdateManyMutationInput_1 = require("../../../inputs/AgentProviderUpdateManyMutationInput");
const AgentProviderWhereInput_1 = require("../../../inputs/AgentProviderWhereInput");
let UpdateManyAgentProviderArgs = exports.UpdateManyAgentProviderArgs = class UpdateManyAgentProviderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateManyMutationInput_1.AgentProviderUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateManyMutationInput_1.AgentProviderUpdateManyMutationInput)
], UpdateManyAgentProviderArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], UpdateManyAgentProviderArgs.prototype, "where", void 0);
exports.UpdateManyAgentProviderArgs = UpdateManyAgentProviderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAgentProviderArgs);
