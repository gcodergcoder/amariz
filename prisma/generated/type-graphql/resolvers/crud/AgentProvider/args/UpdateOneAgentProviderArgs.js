"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAgentProviderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderUpdateInput_1 = require("../../../inputs/AgentProviderUpdateInput");
const AgentProviderWhereUniqueInput_1 = require("../../../inputs/AgentProviderWhereUniqueInput");
let UpdateOneAgentProviderArgs = exports.UpdateOneAgentProviderArgs = class UpdateOneAgentProviderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateInput_1.AgentProviderUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateInput_1.AgentProviderUpdateInput)
], UpdateOneAgentProviderArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], UpdateOneAgentProviderArgs.prototype, "where", void 0);
exports.UpdateOneAgentProviderArgs = UpdateOneAgentProviderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneAgentProviderArgs);
