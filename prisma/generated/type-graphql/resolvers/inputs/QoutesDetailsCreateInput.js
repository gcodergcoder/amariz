"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateNestedOneWithoutQoutesDetailsInput_1 = require("../inputs/QoutesCreateNestedOneWithoutQoutesDetailsInput");
let QoutesDetailsCreateInput = exports.QoutesDetailsCreateInput = class QoutesDetailsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesDetailsCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesDetailsCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], QoutesDetailsCreateInput.prototype, "unit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], QoutesDetailsCreateInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateNestedOneWithoutQoutesDetailsInput_1.QoutesCreateNestedOneWithoutQoutesDetailsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesCreateNestedOneWithoutQoutesDetailsInput_1.QoutesCreateNestedOneWithoutQoutesDetailsInput)
], QoutesDetailsCreateInput.prototype, "qoutes", void 0);
exports.QoutesDetailsCreateInput = QoutesDetailsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsCreateInput", {})
], QoutesDetailsCreateInput);
