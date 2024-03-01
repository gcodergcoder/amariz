"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateNestedOneWithoutQoutesDetailsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateOrConnectWithoutQoutesDetailsInput_1 = require("../inputs/QoutesCreateOrConnectWithoutQoutesDetailsInput");
const QoutesCreateWithoutQoutesDetailsInput_1 = require("../inputs/QoutesCreateWithoutQoutesDetailsInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesCreateNestedOneWithoutQoutesDetailsInput = exports.QoutesCreateNestedOneWithoutQoutesDetailsInput = class QoutesCreateNestedOneWithoutQoutesDetailsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateWithoutQoutesDetailsInput_1.QoutesCreateWithoutQoutesDetailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCreateWithoutQoutesDetailsInput_1.QoutesCreateWithoutQoutesDetailsInput)
], QoutesCreateNestedOneWithoutQoutesDetailsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateOrConnectWithoutQoutesDetailsInput_1.QoutesCreateOrConnectWithoutQoutesDetailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCreateOrConnectWithoutQoutesDetailsInput_1.QoutesCreateOrConnectWithoutQoutesDetailsInput)
], QoutesCreateNestedOneWithoutQoutesDetailsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], QoutesCreateNestedOneWithoutQoutesDetailsInput.prototype, "connect", void 0);
exports.QoutesCreateNestedOneWithoutQoutesDetailsInput = QoutesCreateNestedOneWithoutQoutesDetailsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateNestedOneWithoutQoutesDetailsInput", {})
], QoutesCreateNestedOneWithoutQoutesDetailsInput);
