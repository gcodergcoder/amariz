"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersCountAgentProviderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderWhereInput_1 = require("../../inputs/AgentProviderWhereInput");
let ProvidersCountAgentProviderArgs = exports.ProvidersCountAgentProviderArgs = class ProvidersCountAgentProviderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], ProvidersCountAgentProviderArgs.prototype, "where", void 0);
exports.ProvidersCountAgentProviderArgs = ProvidersCountAgentProviderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProvidersCountAgentProviderArgs);
