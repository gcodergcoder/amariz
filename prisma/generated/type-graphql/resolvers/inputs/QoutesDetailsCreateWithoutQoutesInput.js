"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsCreateWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let QoutesDetailsCreateWithoutQoutesInput = exports.QoutesDetailsCreateWithoutQoutesInput = class QoutesDetailsCreateWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsCreateWithoutQoutesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesDetailsCreateWithoutQoutesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesDetailsCreateWithoutQoutesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsCreateWithoutQoutesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], QoutesDetailsCreateWithoutQoutesInput.prototype, "unit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], QoutesDetailsCreateWithoutQoutesInput.prototype, "price", void 0);
exports.QoutesDetailsCreateWithoutQoutesInput = QoutesDetailsCreateWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsCreateWithoutQoutesInput", {})
], QoutesDetailsCreateWithoutQoutesInput);
