"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderUpdateToOneWithWhereWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderUpdateWithoutQoutesInput_1 = require("../inputs/AgentProviderUpdateWithoutQoutesInput");
const AgentProviderWhereInput_1 = require("../inputs/AgentProviderWhereInput");
let AgentProviderUpdateToOneWithWhereWithoutQoutesInput = exports.AgentProviderUpdateToOneWithWhereWithoutQoutesInput = class AgentProviderUpdateToOneWithWhereWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], AgentProviderUpdateToOneWithWhereWithoutQoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateWithoutQoutesInput_1.AgentProviderUpdateWithoutQoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateWithoutQoutesInput_1.AgentProviderUpdateWithoutQoutesInput)
], AgentProviderUpdateToOneWithWhereWithoutQoutesInput.prototype, "data", void 0);
exports.AgentProviderUpdateToOneWithWhereWithoutQoutesInput = AgentProviderUpdateToOneWithWhereWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderUpdateToOneWithWhereWithoutQoutesInput", {})
], AgentProviderUpdateToOneWithWhereWithoutQoutesInput);
