"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCreateNestedOneWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateOrConnectWithoutQoutesInput_1 = require("../inputs/AgentProviderCreateOrConnectWithoutQoutesInput");
const AgentProviderCreateWithoutQoutesInput_1 = require("../inputs/AgentProviderCreateWithoutQoutesInput");
const AgentProviderWhereUniqueInput_1 = require("../inputs/AgentProviderWhereUniqueInput");
let AgentProviderCreateNestedOneWithoutQoutesInput = exports.AgentProviderCreateNestedOneWithoutQoutesInput = class AgentProviderCreateNestedOneWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateWithoutQoutesInput_1.AgentProviderCreateWithoutQoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateWithoutQoutesInput_1.AgentProviderCreateWithoutQoutesInput)
], AgentProviderCreateNestedOneWithoutQoutesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateOrConnectWithoutQoutesInput_1.AgentProviderCreateOrConnectWithoutQoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateOrConnectWithoutQoutesInput_1.AgentProviderCreateOrConnectWithoutQoutesInput)
], AgentProviderCreateNestedOneWithoutQoutesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], AgentProviderCreateNestedOneWithoutQoutesInput.prototype, "connect", void 0);
exports.AgentProviderCreateNestedOneWithoutQoutesInput = AgentProviderCreateNestedOneWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderCreateNestedOneWithoutQoutesInput", {})
], AgentProviderCreateNestedOneWithoutQoutesInput);
