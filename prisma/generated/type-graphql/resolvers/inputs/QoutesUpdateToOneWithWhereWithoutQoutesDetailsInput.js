"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesUpdateWithoutQoutesDetailsInput_1 = require("../inputs/QoutesUpdateWithoutQoutesDetailsInput");
const QoutesWhereInput_1 = require("../inputs/QoutesWhereInput");
let QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput = exports.QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput = class QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateWithoutQoutesDetailsInput_1.QoutesUpdateWithoutQoutesDetailsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesUpdateWithoutQoutesDetailsInput_1.QoutesUpdateWithoutQoutesDetailsInput)
], QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput.prototype, "data", void 0);
exports.QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput = QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput", {})
], QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput);
