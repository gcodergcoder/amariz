"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCreateOrConnectWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateWithoutQoutesInput_1 = require("../inputs/AgentProviderCreateWithoutQoutesInput");
const AgentProviderWhereUniqueInput_1 = require("../inputs/AgentProviderWhereUniqueInput");
let AgentProviderCreateOrConnectWithoutQoutesInput = exports.AgentProviderCreateOrConnectWithoutQoutesInput = class AgentProviderCreateOrConnectWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], AgentProviderCreateOrConnectWithoutQoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateWithoutQoutesInput_1.AgentProviderCreateWithoutQoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateWithoutQoutesInput_1.AgentProviderCreateWithoutQoutesInput)
], AgentProviderCreateOrConnectWithoutQoutesInput.prototype, "create", void 0);
exports.AgentProviderCreateOrConnectWithoutQoutesInput = AgentProviderCreateOrConnectWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderCreateOrConnectWithoutQoutesInput", {})
], AgentProviderCreateOrConnectWithoutQoutesInput);
