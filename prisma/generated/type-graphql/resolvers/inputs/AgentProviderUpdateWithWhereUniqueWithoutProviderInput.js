"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderUpdateWithWhereUniqueWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderUpdateWithoutProviderInput_1 = require("../inputs/AgentProviderUpdateWithoutProviderInput");
const AgentProviderWhereUniqueInput_1 = require("../inputs/AgentProviderWhereUniqueInput");
let AgentProviderUpdateWithWhereUniqueWithoutProviderInput = exports.AgentProviderUpdateWithWhereUniqueWithoutProviderInput = class AgentProviderUpdateWithWhereUniqueWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], AgentProviderUpdateWithWhereUniqueWithoutProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateWithoutProviderInput_1.AgentProviderUpdateWithoutProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateWithoutProviderInput_1.AgentProviderUpdateWithoutProviderInput)
], AgentProviderUpdateWithWhereUniqueWithoutProviderInput.prototype, "data", void 0);
exports.AgentProviderUpdateWithWhereUniqueWithoutProviderInput = AgentProviderUpdateWithWhereUniqueWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderUpdateWithWhereUniqueWithoutProviderInput", {})
], AgentProviderUpdateWithWhereUniqueWithoutProviderInput);
