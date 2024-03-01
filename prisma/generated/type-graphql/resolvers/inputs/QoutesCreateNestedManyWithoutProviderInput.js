"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateNestedManyWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateManyProviderInputEnvelope_1 = require("../inputs/QoutesCreateManyProviderInputEnvelope");
const QoutesCreateOrConnectWithoutProviderInput_1 = require("../inputs/QoutesCreateOrConnectWithoutProviderInput");
const QoutesCreateWithoutProviderInput_1 = require("../inputs/QoutesCreateWithoutProviderInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesCreateNestedManyWithoutProviderInput = exports.QoutesCreateNestedManyWithoutProviderInput = class QoutesCreateNestedManyWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesCreateWithoutProviderInput_1.QoutesCreateWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesCreateNestedManyWithoutProviderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesCreateOrConnectWithoutProviderInput_1.QoutesCreateOrConnectWithoutProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesCreateNestedManyWithoutProviderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateManyProviderInputEnvelope_1.QoutesCreateManyProviderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCreateManyProviderInputEnvelope_1.QoutesCreateManyProviderInputEnvelope)
], QoutesCreateNestedManyWithoutProviderInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereUniqueInput_1.QoutesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesCreateNestedManyWithoutProviderInput.prototype, "connect", void 0);
exports.QoutesCreateNestedManyWithoutProviderInput = QoutesCreateNestedManyWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateNestedManyWithoutProviderInput", {})
], QoutesCreateNestedManyWithoutProviderInput);
