"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateOrConnectWithoutQoutesDetailsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateWithoutQoutesDetailsInput_1 = require("../inputs/QoutesCreateWithoutQoutesDetailsInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesCreateOrConnectWithoutQoutesDetailsInput = exports.QoutesCreateOrConnectWithoutQoutesDetailsInput = class QoutesCreateOrConnectWithoutQoutesDetailsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], QoutesCreateOrConnectWithoutQoutesDetailsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateWithoutQoutesDetailsInput_1.QoutesCreateWithoutQoutesDetailsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesCreateWithoutQoutesDetailsInput_1.QoutesCreateWithoutQoutesDetailsInput)
], QoutesCreateOrConnectWithoutQoutesDetailsInput.prototype, "create", void 0);
exports.QoutesCreateOrConnectWithoutQoutesDetailsInput = QoutesCreateOrConnectWithoutQoutesDetailsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateOrConnectWithoutQoutesDetailsInput", {})
], QoutesCreateOrConnectWithoutQoutesDetailsInput);
