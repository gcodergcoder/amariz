"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesWhereInput_1 = require("../inputs/QoutesWhereInput");
let QoutesListRelationFilter = exports.QoutesListRelationFilter = class QoutesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], QoutesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], QoutesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], QoutesListRelationFilter.prototype, "none", void 0);
exports.QoutesListRelationFilter = QoutesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesListRelationFilter", {})
], QoutesListRelationFilter);
