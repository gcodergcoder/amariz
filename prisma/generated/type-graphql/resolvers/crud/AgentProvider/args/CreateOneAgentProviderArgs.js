"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAgentProviderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateInput_1 = require("../../../inputs/AgentProviderCreateInput");
let CreateOneAgentProviderArgs = exports.CreateOneAgentProviderArgs = class CreateOneAgentProviderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateInput_1.AgentProviderCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateInput_1.AgentProviderCreateInput)
], CreateOneAgentProviderArgs.prototype, "data", void 0);
exports.CreateOneAgentProviderArgs = CreateOneAgentProviderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneAgentProviderArgs);
