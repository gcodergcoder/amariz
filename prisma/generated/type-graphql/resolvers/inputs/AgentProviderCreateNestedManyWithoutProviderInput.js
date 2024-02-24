"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCreateNestedManyWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateManyProviderInputEnvelope_1 = require("../inputs/AgentProviderCreateManyProviderInputEnvelope");
const AgentProviderCreateOrConnectWithoutProviderInput_1 = require("../inputs/AgentProviderCreateOrConnectWithoutProviderInput");
const AgentProviderCreateWithoutProviderInput_1 = require("../inputs/AgentProviderCreateWithoutProviderInput");
const AgentProviderWhereUniqueInput_1 = require("../inputs/AgentProviderWhereUniqueInput");
let AgentProviderCreateNestedManyWithoutProviderInput = exports.AgentProviderCreateNestedManyWithoutProviderInput = class AgentProviderCreateNestedManyWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderCreateWithoutProviderInput_1.AgentProviderCreateWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderCreateNestedManyWithoutProviderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderCreateOrConnectWithoutProviderInput_1.AgentProviderCreateOrConnectWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderCreateNestedManyWithoutProviderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateManyProviderInputEnvelope_1.AgentProviderCreateManyProviderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateManyProviderInputEnvelope_1.AgentProviderCreateManyProviderInputEnvelope)
], AgentProviderCreateNestedManyWithoutProviderInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderCreateNestedManyWithoutProviderInput.prototype, "connect", void 0);
exports.AgentProviderCreateNestedManyWithoutProviderInput = AgentProviderCreateNestedManyWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderCreateNestedManyWithoutProviderInput", {})
], AgentProviderCreateNestedManyWithoutProviderInput);
