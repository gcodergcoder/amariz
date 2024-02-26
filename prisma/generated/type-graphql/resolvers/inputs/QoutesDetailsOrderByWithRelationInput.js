"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesOrderByWithRelationInput_1 = require("../inputs/QoutesOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let QoutesDetailsOrderByWithRelationInput = exports.QoutesDetailsOrderByWithRelationInput = class QoutesDetailsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithRelationInput.prototype, "unit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithRelationInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesDetailsOrderByWithRelationInput.prototype, "quotesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesOrderByWithRelationInput_1.QoutesOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesOrderByWithRelationInput_1.QoutesOrderByWithRelationInput)
], QoutesDetailsOrderByWithRelationInput.prototype, "qoutes", void 0);
exports.QoutesDetailsOrderByWithRelationInput = QoutesDetailsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsOrderByWithRelationInput", {})
], QoutesDetailsOrderByWithRelationInput);
