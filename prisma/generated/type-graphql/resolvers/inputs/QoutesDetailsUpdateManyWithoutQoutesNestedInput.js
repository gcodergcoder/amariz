"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsUpdateManyWithoutQoutesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsCreateManyQoutesInputEnvelope_1 = require("../inputs/QoutesDetailsCreateManyQoutesInputEnvelope");
const QoutesDetailsCreateOrConnectWithoutQoutesInput_1 = require("../inputs/QoutesDetailsCreateOrConnectWithoutQoutesInput");
const QoutesDetailsCreateWithoutQoutesInput_1 = require("../inputs/QoutesDetailsCreateWithoutQoutesInput");
const QoutesDetailsScalarWhereInput_1 = require("../inputs/QoutesDetailsScalarWhereInput");
const QoutesDetailsUpdateManyWithWhereWithoutQoutesInput_1 = require("../inputs/QoutesDetailsUpdateManyWithWhereWithoutQoutesInput");
const QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput_1 = require("../inputs/QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput");
const QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput_1 = require("../inputs/QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput");
const QoutesDetailsWhereUniqueInput_1 = require("../inputs/QoutesDetailsWhereUniqueInput");
let QoutesDetailsUpdateManyWithoutQoutesNestedInput = exports.QoutesDetailsUpdateManyWithoutQoutesNestedInput = class QoutesDetailsUpdateManyWithoutQoutesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsCreateWithoutQoutesInput_1.QoutesDetailsCreateWithoutQoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsUpdateManyWithoutQoutesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsCreateOrConnectWithoutQoutesInput_1.QoutesDetailsCreateOrConnectWithoutQoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsUpdateManyWithoutQoutesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput_1.QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsUpdateManyWithoutQoutesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCreateManyQoutesInputEnvelope_1.QoutesDetailsCreateManyQoutesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCreateManyQoutesInputEnvelope_1.QoutesDetailsCreateManyQoutesInputEnvelope)
], QoutesDetailsUpdateManyWithoutQoutesNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsUpdateManyWithoutQoutesNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsUpdateManyWithoutQoutesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsUpdateManyWithoutQoutesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsUpdateManyWithoutQoutesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput_1.QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsUpdateManyWithoutQoutesNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsUpdateManyWithWhereWithoutQoutesInput_1.QoutesDetailsUpdateManyWithWhereWithoutQoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsUpdateManyWithoutQoutesNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsScalarWhereInput_1.QoutesDetailsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsUpdateManyWithoutQoutesNestedInput.prototype, "deleteMany", void 0);
exports.QoutesDetailsUpdateManyWithoutQoutesNestedInput = QoutesDetailsUpdateManyWithoutQoutesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsUpdateManyWithoutQoutesNestedInput", {})
], QoutesDetailsUpdateManyWithoutQoutesNestedInput);
