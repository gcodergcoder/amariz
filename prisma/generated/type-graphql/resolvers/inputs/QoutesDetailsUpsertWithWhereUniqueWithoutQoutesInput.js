"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsCreateWithoutQoutesInput_1 = require("../inputs/QoutesDetailsCreateWithoutQoutesInput");
const QoutesDetailsUpdateWithoutQoutesInput_1 = require("../inputs/QoutesDetailsUpdateWithoutQoutesInput");
const QoutesDetailsWhereUniqueInput_1 = require("../inputs/QoutesDetailsWhereUniqueInput");
let QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput = exports.QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput = class QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput)
], QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsUpdateWithoutQoutesInput_1.QoutesDetailsUpdateWithoutQoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsUpdateWithoutQoutesInput_1.QoutesDetailsUpdateWithoutQoutesInput)
], QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCreateWithoutQoutesInput_1.QoutesDetailsCreateWithoutQoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCreateWithoutQoutesInput_1.QoutesDetailsCreateWithoutQoutesInput)
], QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput.prototype, "create", void 0);
exports.QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput = QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput", {})
], QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput);
