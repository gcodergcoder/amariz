"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpsertWithoutQoutesDetailsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateWithoutQoutesDetailsInput_1 = require("../inputs/QoutesCreateWithoutQoutesDetailsInput");
const QoutesUpdateWithoutQoutesDetailsInput_1 = require("../inputs/QoutesUpdateWithoutQoutesDetailsInput");
const QoutesWhereInput_1 = require("../inputs/QoutesWhereInput");
let QoutesUpsertWithoutQoutesDetailsInput = exports.QoutesUpsertWithoutQoutesDetailsInput = class QoutesUpsertWithoutQoutesDetailsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateWithoutQoutesDetailsInput_1.QoutesUpdateWithoutQoutesDetailsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesUpdateWithoutQoutesDetailsInput_1.QoutesUpdateWithoutQoutesDetailsInput)
], QoutesUpsertWithoutQoutesDetailsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateWithoutQoutesDetailsInput_1.QoutesCreateWithoutQoutesDetailsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesCreateWithoutQoutesDetailsInput_1.QoutesCreateWithoutQoutesDetailsInput)
], QoutesUpsertWithoutQoutesDetailsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], QoutesUpsertWithoutQoutesDetailsInput.prototype, "where", void 0);
exports.QoutesUpsertWithoutQoutesDetailsInput = QoutesUpsertWithoutQoutesDetailsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpsertWithoutQoutesDetailsInput", {})
], QoutesUpsertWithoutQoutesDetailsInput);
