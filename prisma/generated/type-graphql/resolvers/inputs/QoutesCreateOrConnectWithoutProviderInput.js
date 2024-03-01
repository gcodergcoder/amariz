"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateOrConnectWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateWithoutProviderInput_1 = require("../inputs/QoutesCreateWithoutProviderInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesCreateOrConnectWithoutProviderInput = exports.QoutesCreateOrConnectWithoutProviderInput = class QoutesCreateOrConnectWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], QoutesCreateOrConnectWithoutProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateWithoutProviderInput_1.QoutesCreateWithoutProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesCreateWithoutProviderInput_1.QoutesCreateWithoutProviderInput)
], QoutesCreateOrConnectWithoutProviderInput.prototype, "create", void 0);
exports.QoutesCreateOrConnectWithoutProviderInput = QoutesCreateOrConnectWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateOrConnectWithoutProviderInput", {})
], QoutesCreateOrConnectWithoutProviderInput);
