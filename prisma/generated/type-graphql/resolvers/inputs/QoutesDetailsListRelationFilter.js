"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsWhereInput_1 = require("../inputs/QoutesDetailsWhereInput");
let QoutesDetailsListRelationFilter = exports.QoutesDetailsListRelationFilter = class QoutesDetailsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereInput_1.QoutesDetailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereInput_1.QoutesDetailsWhereInput)
], QoutesDetailsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereInput_1.QoutesDetailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereInput_1.QoutesDetailsWhereInput)
], QoutesDetailsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereInput_1.QoutesDetailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereInput_1.QoutesDetailsWhereInput)
], QoutesDetailsListRelationFilter.prototype, "none", void 0);
exports.QoutesDetailsListRelationFilter = QoutesDetailsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsListRelationFilter", {})
], QoutesDetailsListRelationFilter);
