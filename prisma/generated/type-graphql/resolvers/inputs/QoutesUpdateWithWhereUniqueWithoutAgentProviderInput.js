"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpdateWithWhereUniqueWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesUpdateWithoutAgentProviderInput_1 = require("../inputs/QoutesUpdateWithoutAgentProviderInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesUpdateWithWhereUniqueWithoutAgentProviderInput = exports.QoutesUpdateWithWhereUniqueWithoutAgentProviderInput = class QoutesUpdateWithWhereUniqueWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], QoutesUpdateWithWhereUniqueWithoutAgentProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateWithoutAgentProviderInput_1.QoutesUpdateWithoutAgentProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesUpdateWithoutAgentProviderInput_1.QoutesUpdateWithoutAgentProviderInput)
], QoutesUpdateWithWhereUniqueWithoutAgentProviderInput.prototype, "data", void 0);
exports.QoutesUpdateWithWhereUniqueWithoutAgentProviderInput = QoutesUpdateWithWhereUniqueWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpdateWithWhereUniqueWithoutAgentProviderInput", {})
], QoutesUpdateWithWhereUniqueWithoutAgentProviderInput);
