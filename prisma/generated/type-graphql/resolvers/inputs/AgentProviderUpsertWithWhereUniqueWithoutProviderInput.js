"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderUpsertWithWhereUniqueWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateWithoutProviderInput_1 = require("../inputs/AgentProviderCreateWithoutProviderInput");
const AgentProviderUpdateWithoutProviderInput_1 = require("../inputs/AgentProviderUpdateWithoutProviderInput");
const AgentProviderWhereUniqueInput_1 = require("../inputs/AgentProviderWhereUniqueInput");
let AgentProviderUpsertWithWhereUniqueWithoutProviderInput = exports.AgentProviderUpsertWithWhereUniqueWithoutProviderInput = class AgentProviderUpsertWithWhereUniqueWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], AgentProviderUpsertWithWhereUniqueWithoutProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateWithoutProviderInput_1.AgentProviderUpdateWithoutProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateWithoutProviderInput_1.AgentProviderUpdateWithoutProviderInput)
], AgentProviderUpsertWithWhereUniqueWithoutProviderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateWithoutProviderInput_1.AgentProviderCreateWithoutProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateWithoutProviderInput_1.AgentProviderCreateWithoutProviderInput)
], AgentProviderUpsertWithWhereUniqueWithoutProviderInput.prototype, "create", void 0);
exports.AgentProviderUpsertWithWhereUniqueWithoutProviderInput = AgentProviderUpsertWithWhereUniqueWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderUpsertWithWhereUniqueWithoutProviderInput", {})
], AgentProviderUpsertWithWhereUniqueWithoutProviderInput);
