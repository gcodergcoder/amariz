"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateOrConnectWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateWithoutAgentProviderInput_1 = require("../inputs/QoutesCreateWithoutAgentProviderInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesCreateOrConnectWithoutAgentProviderInput = exports.QoutesCreateOrConnectWithoutAgentProviderInput = class QoutesCreateOrConnectWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], QoutesCreateOrConnectWithoutAgentProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateWithoutAgentProviderInput_1.QoutesCreateWithoutAgentProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesCreateWithoutAgentProviderInput_1.QoutesCreateWithoutAgentProviderInput)
], QoutesCreateOrConnectWithoutAgentProviderInput.prototype, "create", void 0);
exports.QoutesCreateOrConnectWithoutAgentProviderInput = QoutesCreateOrConnectWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateOrConnectWithoutAgentProviderInput", {})
], QoutesCreateOrConnectWithoutAgentProviderInput);
