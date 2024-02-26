"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpdateManyWithoutAgentProviderNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateManyAgentProviderInputEnvelope_1 = require("../inputs/QoutesCreateManyAgentProviderInputEnvelope");
const QoutesCreateOrConnectWithoutAgentProviderInput_1 = require("../inputs/QoutesCreateOrConnectWithoutAgentProviderInput");
const QoutesCreateWithoutAgentProviderInput_1 = require("../inputs/QoutesCreateWithoutAgentProviderInput");
const QoutesScalarWhereInput_1 = require("../inputs/QoutesScalarWhereInput");
const QoutesUpdateManyWithWhereWithoutAgentProviderInput_1 = require("../inputs/QoutesUpdateManyWithWhereWithoutAgentProviderInput");
const QoutesUpdateWithWhereUniqueWithoutAgentProviderInput_1 = require("../inputs/QoutesUpdateWithWhereUniqueWithoutAgentProviderInput");
const QoutesUpsertWithWhereUniqueWithoutAgentProviderInput_1 = require("../inputs/QoutesUpsertWithWhereUniqueWithoutAgentProviderInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesUpdateManyWithoutAgentProviderNestedInput = exports.QoutesUpdateManyWithoutAgentProviderNestedInput = class QoutesUpdateManyWithoutAgentProviderNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesCreateWithoutAgentProviderInput_1.QoutesCreateWithoutAgentProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutAgentProviderNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesCreateOrConnectWithoutAgentProviderInput_1.QoutesCreateOrConnectWithoutAgentProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutAgentProviderNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesUpsertWithWhereUniqueWithoutAgentProviderInput_1.QoutesUpsertWithWhereUniqueWithoutAgentProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutAgentProviderNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateManyAgentProviderInputEnvelope_1.QoutesCreateManyAgentProviderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCreateManyAgentProviderInputEnvelope_1.QoutesCreateManyAgentProviderInputEnvelope)
], QoutesUpdateManyWithoutAgentProviderNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereUniqueInput_1.QoutesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutAgentProviderNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereUniqueInput_1.QoutesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutAgentProviderNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereUniqueInput_1.QoutesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutAgentProviderNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereUniqueInput_1.QoutesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutAgentProviderNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesUpdateWithWhereUniqueWithoutAgentProviderInput_1.QoutesUpdateWithWhereUniqueWithoutAgentProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutAgentProviderNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesUpdateManyWithWhereWithoutAgentProviderInput_1.QoutesUpdateManyWithWhereWithoutAgentProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutAgentProviderNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesScalarWhereInput_1.QoutesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutAgentProviderNestedInput.prototype, "deleteMany", void 0);
exports.QoutesUpdateManyWithoutAgentProviderNestedInput = QoutesUpdateManyWithoutAgentProviderNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpdateManyWithoutAgentProviderNestedInput", {})
], QoutesUpdateManyWithoutAgentProviderNestedInput);
