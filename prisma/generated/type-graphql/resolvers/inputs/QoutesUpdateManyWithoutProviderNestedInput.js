"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpdateManyWithoutProviderNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateManyProviderInputEnvelope_1 = require("../inputs/QoutesCreateManyProviderInputEnvelope");
const QoutesCreateOrConnectWithoutProviderInput_1 = require("../inputs/QoutesCreateOrConnectWithoutProviderInput");
const QoutesCreateWithoutProviderInput_1 = require("../inputs/QoutesCreateWithoutProviderInput");
const QoutesScalarWhereInput_1 = require("../inputs/QoutesScalarWhereInput");
const QoutesUpdateManyWithWhereWithoutProviderInput_1 = require("../inputs/QoutesUpdateManyWithWhereWithoutProviderInput");
const QoutesUpdateWithWhereUniqueWithoutProviderInput_1 = require("../inputs/QoutesUpdateWithWhereUniqueWithoutProviderInput");
const QoutesUpsertWithWhereUniqueWithoutProviderInput_1 = require("../inputs/QoutesUpsertWithWhereUniqueWithoutProviderInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesUpdateManyWithoutProviderNestedInput = exports.QoutesUpdateManyWithoutProviderNestedInput = class QoutesUpdateManyWithoutProviderNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesCreateWithoutProviderInput_1.QoutesCreateWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutProviderNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesCreateOrConnectWithoutProviderInput_1.QoutesCreateOrConnectWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutProviderNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesUpsertWithWhereUniqueWithoutProviderInput_1.QoutesUpsertWithWhereUniqueWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutProviderNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateManyProviderInputEnvelope_1.QoutesCreateManyProviderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCreateManyProviderInputEnvelope_1.QoutesCreateManyProviderInputEnvelope)
], QoutesUpdateManyWithoutProviderNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereUniqueInput_1.QoutesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutProviderNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereUniqueInput_1.QoutesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutProviderNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereUniqueInput_1.QoutesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutProviderNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereUniqueInput_1.QoutesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutProviderNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesUpdateWithWhereUniqueWithoutProviderInput_1.QoutesUpdateWithWhereUniqueWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutProviderNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesUpdateManyWithWhereWithoutProviderInput_1.QoutesUpdateManyWithWhereWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutProviderNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesScalarWhereInput_1.QoutesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesUpdateManyWithoutProviderNestedInput.prototype, "deleteMany", void 0);
exports.QoutesUpdateManyWithoutProviderNestedInput = QoutesUpdateManyWithoutProviderNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpdateManyWithoutProviderNestedInput", {})
], QoutesUpdateManyWithoutProviderNestedInput);
