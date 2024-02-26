"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpsertWithWhereUniqueWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateWithoutAgentProviderInput_1 = require("../inputs/QoutesCreateWithoutAgentProviderInput");
const QoutesUpdateWithoutAgentProviderInput_1 = require("../inputs/QoutesUpdateWithoutAgentProviderInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesUpsertWithWhereUniqueWithoutAgentProviderInput = exports.QoutesUpsertWithWhereUniqueWithoutAgentProviderInput = class QoutesUpsertWithWhereUniqueWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], QoutesUpsertWithWhereUniqueWithoutAgentProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateWithoutAgentProviderInput_1.QoutesUpdateWithoutAgentProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesUpdateWithoutAgentProviderInput_1.QoutesUpdateWithoutAgentProviderInput)
], QoutesUpsertWithWhereUniqueWithoutAgentProviderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateWithoutAgentProviderInput_1.QoutesCreateWithoutAgentProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesCreateWithoutAgentProviderInput_1.QoutesCreateWithoutAgentProviderInput)
], QoutesUpsertWithWhereUniqueWithoutAgentProviderInput.prototype, "create", void 0);
exports.QoutesUpsertWithWhereUniqueWithoutAgentProviderInput = QoutesUpsertWithWhereUniqueWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpsertWithWhereUniqueWithoutAgentProviderInput", {})
], QoutesUpsertWithWhereUniqueWithoutAgentProviderInput);
