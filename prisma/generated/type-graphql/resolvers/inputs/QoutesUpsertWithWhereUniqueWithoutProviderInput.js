"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpsertWithWhereUniqueWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateWithoutProviderInput_1 = require("../inputs/QoutesCreateWithoutProviderInput");
const QoutesUpdateWithoutProviderInput_1 = require("../inputs/QoutesUpdateWithoutProviderInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesUpsertWithWhereUniqueWithoutProviderInput = exports.QoutesUpsertWithWhereUniqueWithoutProviderInput = class QoutesUpsertWithWhereUniqueWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], QoutesUpsertWithWhereUniqueWithoutProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateWithoutProviderInput_1.QoutesUpdateWithoutProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesUpdateWithoutProviderInput_1.QoutesUpdateWithoutProviderInput)
], QoutesUpsertWithWhereUniqueWithoutProviderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateWithoutProviderInput_1.QoutesCreateWithoutProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesCreateWithoutProviderInput_1.QoutesCreateWithoutProviderInput)
], QoutesUpsertWithWhereUniqueWithoutProviderInput.prototype, "create", void 0);
exports.QoutesUpsertWithWhereUniqueWithoutProviderInput = QoutesUpsertWithWhereUniqueWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpsertWithWhereUniqueWithoutProviderInput", {})
], QoutesUpsertWithWhereUniqueWithoutProviderInput);
