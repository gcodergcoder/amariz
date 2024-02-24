"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAgentProviderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderWhereUniqueInput_1 = require("../../../inputs/AgentProviderWhereUniqueInput");
let DeleteOneAgentProviderArgs = exports.DeleteOneAgentProviderArgs = class DeleteOneAgentProviderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], DeleteOneAgentProviderArgs.prototype, "where", void 0);
exports.DeleteOneAgentProviderArgs = DeleteOneAgentProviderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneAgentProviderArgs);
