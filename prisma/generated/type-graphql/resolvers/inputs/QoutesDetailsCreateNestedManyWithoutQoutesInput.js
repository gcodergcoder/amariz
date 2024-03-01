"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsCreateNestedManyWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsCreateManyQoutesInputEnvelope_1 = require("../inputs/QoutesDetailsCreateManyQoutesInputEnvelope");
const QoutesDetailsCreateOrConnectWithoutQoutesInput_1 = require("../inputs/QoutesDetailsCreateOrConnectWithoutQoutesInput");
const QoutesDetailsCreateWithoutQoutesInput_1 = require("../inputs/QoutesDetailsCreateWithoutQoutesInput");
const QoutesDetailsWhereUniqueInput_1 = require("../inputs/QoutesDetailsWhereUniqueInput");
let QoutesDetailsCreateNestedManyWithoutQoutesInput = exports.QoutesDetailsCreateNestedManyWithoutQoutesInput = class QoutesDetailsCreateNestedManyWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsCreateWithoutQoutesInput_1.QoutesDetailsCreateWithoutQoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsCreateNestedManyWithoutQoutesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsCreateOrConnectWithoutQoutesInput_1.QoutesDetailsCreateOrConnectWithoutQoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsCreateNestedManyWithoutQoutesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCreateManyQoutesInputEnvelope_1.QoutesDetailsCreateManyQoutesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCreateManyQoutesInputEnvelope_1.QoutesDetailsCreateManyQoutesInputEnvelope)
], QoutesDetailsCreateNestedManyWithoutQoutesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsCreateNestedManyWithoutQoutesInput.prototype, "connect", void 0);
exports.QoutesDetailsCreateNestedManyWithoutQoutesInput = QoutesDetailsCreateNestedManyWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsCreateNestedManyWithoutQoutesInput", {})
], QoutesDetailsCreateNestedManyWithoutQoutesInput);
