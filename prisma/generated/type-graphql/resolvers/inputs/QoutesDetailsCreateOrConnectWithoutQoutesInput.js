"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsCreateOrConnectWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsCreateWithoutQoutesInput_1 = require("../inputs/QoutesDetailsCreateWithoutQoutesInput");
const QoutesDetailsWhereUniqueInput_1 = require("../inputs/QoutesDetailsWhereUniqueInput");
let QoutesDetailsCreateOrConnectWithoutQoutesInput = exports.QoutesDetailsCreateOrConnectWithoutQoutesInput = class QoutesDetailsCreateOrConnectWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput)
], QoutesDetailsCreateOrConnectWithoutQoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCreateWithoutQoutesInput_1.QoutesDetailsCreateWithoutQoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCreateWithoutQoutesInput_1.QoutesDetailsCreateWithoutQoutesInput)
], QoutesDetailsCreateOrConnectWithoutQoutesInput.prototype, "create", void 0);
exports.QoutesDetailsCreateOrConnectWithoutQoutesInput = QoutesDetailsCreateOrConnectWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsCreateOrConnectWithoutQoutesInput", {})
], QoutesDetailsCreateOrConnectWithoutQoutesInput);
