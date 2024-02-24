"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCreateOrConnectWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateWithoutProviderInput_1 = require("../inputs/AgentProviderCreateWithoutProviderInput");
const AgentProviderWhereUniqueInput_1 = require("../inputs/AgentProviderWhereUniqueInput");
let AgentProviderCreateOrConnectWithoutProviderInput = exports.AgentProviderCreateOrConnectWithoutProviderInput = class AgentProviderCreateOrConnectWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], AgentProviderCreateOrConnectWithoutProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateWithoutProviderInput_1.AgentProviderCreateWithoutProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateWithoutProviderInput_1.AgentProviderCreateWithoutProviderInput)
], AgentProviderCreateOrConnectWithoutProviderInput.prototype, "create", void 0);
exports.AgentProviderCreateOrConnectWithoutProviderInput = AgentProviderCreateOrConnectWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderCreateOrConnectWithoutProviderInput", {})
], AgentProviderCreateOrConnectWithoutProviderInput);
