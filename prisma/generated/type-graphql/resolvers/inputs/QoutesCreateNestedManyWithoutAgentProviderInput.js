"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateNestedManyWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateManyAgentProviderInputEnvelope_1 = require("../inputs/QoutesCreateManyAgentProviderInputEnvelope");
const QoutesCreateOrConnectWithoutAgentProviderInput_1 = require("../inputs/QoutesCreateOrConnectWithoutAgentProviderInput");
const QoutesCreateWithoutAgentProviderInput_1 = require("../inputs/QoutesCreateWithoutAgentProviderInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesCreateNestedManyWithoutAgentProviderInput = exports.QoutesCreateNestedManyWithoutAgentProviderInput = class QoutesCreateNestedManyWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesCreateWithoutAgentProviderInput_1.QoutesCreateWithoutAgentProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesCreateNestedManyWithoutAgentProviderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesCreateOrConnectWithoutAgentProviderInput_1.QoutesCreateOrConnectWithoutAgentProviderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesCreateNestedManyWithoutAgentProviderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateManyAgentProviderInputEnvelope_1.QoutesCreateManyAgentProviderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCreateManyAgentProviderInputEnvelope_1.QoutesCreateManyAgentProviderInputEnvelope)
], QoutesCreateNestedManyWithoutAgentProviderInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesWhereUniqueInput_1.QoutesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesCreateNestedManyWithoutAgentProviderInput.prototype, "connect", void 0);
exports.QoutesCreateNestedManyWithoutAgentProviderInput = QoutesCreateNestedManyWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateNestedManyWithoutAgentProviderInput", {})
], QoutesCreateNestedManyWithoutAgentProviderInput);
