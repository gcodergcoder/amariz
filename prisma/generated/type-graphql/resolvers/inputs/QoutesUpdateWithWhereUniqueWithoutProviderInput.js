"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpdateWithWhereUniqueWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesUpdateWithoutProviderInput_1 = require("../inputs/QoutesUpdateWithoutProviderInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesUpdateWithWhereUniqueWithoutProviderInput = exports.QoutesUpdateWithWhereUniqueWithoutProviderInput = class QoutesUpdateWithWhereUniqueWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], QoutesUpdateWithWhereUniqueWithoutProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateWithoutProviderInput_1.QoutesUpdateWithoutProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesUpdateWithoutProviderInput_1.QoutesUpdateWithoutProviderInput)
], QoutesUpdateWithWhereUniqueWithoutProviderInput.prototype, "data", void 0);
exports.QoutesUpdateWithWhereUniqueWithoutProviderInput = QoutesUpdateWithWhereUniqueWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpdateWithWhereUniqueWithoutProviderInput", {})
], QoutesUpdateWithWhereUniqueWithoutProviderInput);
