"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAgentProviderOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderWhereUniqueInput_1 = require("../../../inputs/AgentProviderWhereUniqueInput");
let FindUniqueAgentProviderOrThrowArgs = exports.FindUniqueAgentProviderOrThrowArgs = class FindUniqueAgentProviderOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], FindUniqueAgentProviderOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueAgentProviderOrThrowArgs = FindUniqueAgentProviderOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAgentProviderOrThrowArgs);
