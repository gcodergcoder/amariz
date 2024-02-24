"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderUpdateManyWithoutProviderNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateManyProviderInputEnvelope_1 = require("../inputs/AgentProviderCreateManyProviderInputEnvelope");
const AgentProviderCreateOrConnectWithoutProviderInput_1 = require("../inputs/AgentProviderCreateOrConnectWithoutProviderInput");
const AgentProviderCreateWithoutProviderInput_1 = require("../inputs/AgentProviderCreateWithoutProviderInput");
const AgentProviderScalarWhereInput_1 = require("../inputs/AgentProviderScalarWhereInput");
const AgentProviderUpdateManyWithWhereWithoutProviderInput_1 = require("../inputs/AgentProviderUpdateManyWithWhereWithoutProviderInput");
const AgentProviderUpdateWithWhereUniqueWithoutProviderInput_1 = require("../inputs/AgentProviderUpdateWithWhereUniqueWithoutProviderInput");
const AgentProviderUpsertWithWhereUniqueWithoutProviderInput_1 = require("../inputs/AgentProviderUpsertWithWhereUniqueWithoutProviderInput");
const AgentProviderWhereUniqueInput_1 = require("../inputs/AgentProviderWhereUniqueInput");
let AgentProviderUpdateManyWithoutProviderNestedInput = exports.AgentProviderUpdateManyWithoutProviderNestedInput = class AgentProviderUpdateManyWithoutProviderNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderCreateWithoutProviderInput_1.AgentProviderCreateWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderUpdateManyWithoutProviderNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderCreateOrConnectWithoutProviderInput_1.AgentProviderCreateOrConnectWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderUpdateManyWithoutProviderNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderUpsertWithWhereUniqueWithoutProviderInput_1.AgentProviderUpsertWithWhereUniqueWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderUpdateManyWithoutProviderNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateManyProviderInputEnvelope_1.AgentProviderCreateManyProviderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateManyProviderInputEnvelope_1.AgentProviderCreateManyProviderInputEnvelope)
], AgentProviderUpdateManyWithoutProviderNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderUpdateManyWithoutProviderNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderUpdateManyWithoutProviderNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderUpdateManyWithoutProviderNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderUpdateManyWithoutProviderNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderUpdateWithWhereUniqueWithoutProviderInput_1.AgentProviderUpdateWithWhereUniqueWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderUpdateManyWithoutProviderNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderUpdateManyWithWhereWithoutProviderInput_1.AgentProviderUpdateManyWithWhereWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderUpdateManyWithoutProviderNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderScalarWhereInput_1.AgentProviderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderUpdateManyWithoutProviderNestedInput.prototype, "deleteMany", void 0);
exports.AgentProviderUpdateManyWithoutProviderNestedInput = AgentProviderUpdateManyWithoutProviderNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderUpdateManyWithoutProviderNestedInput", {})
], AgentProviderUpdateManyWithoutProviderNestedInput);
