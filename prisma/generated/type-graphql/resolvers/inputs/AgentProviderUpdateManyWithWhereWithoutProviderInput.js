"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderUpdateManyWithWhereWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderScalarWhereInput_1 = require("../inputs/AgentProviderScalarWhereInput");
const AgentProviderUpdateManyMutationInput_1 = require("../inputs/AgentProviderUpdateManyMutationInput");
let AgentProviderUpdateManyWithWhereWithoutProviderInput = exports.AgentProviderUpdateManyWithWhereWithoutProviderInput = class AgentProviderUpdateManyWithWhereWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderScalarWhereInput_1.AgentProviderScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderScalarWhereInput_1.AgentProviderScalarWhereInput)
], AgentProviderUpdateManyWithWhereWithoutProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateManyMutationInput_1.AgentProviderUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateManyMutationInput_1.AgentProviderUpdateManyMutationInput)
], AgentProviderUpdateManyWithWhereWithoutProviderInput.prototype, "data", void 0);
exports.AgentProviderUpdateManyWithWhereWithoutProviderInput = AgentProviderUpdateManyWithWhereWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderUpdateManyWithWhereWithoutProviderInput", {})
], AgentProviderUpdateManyWithWhereWithoutProviderInput);
