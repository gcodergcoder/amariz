"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsUpdateWithoutQoutesInput_1 = require("../inputs/QoutesDetailsUpdateWithoutQoutesInput");
const QoutesDetailsWhereUniqueInput_1 = require("../inputs/QoutesDetailsWhereUniqueInput");
let QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput = exports.QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput = class QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput)
], QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsUpdateWithoutQoutesInput_1.QoutesDetailsUpdateWithoutQoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsUpdateWithoutQoutesInput_1.QoutesDetailsUpdateWithoutQoutesInput)
], QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput.prototype, "data", void 0);
exports.QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput = QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput", {})
], QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput);
