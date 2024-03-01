"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesWhereInput_1 = require("../inputs/QoutesWhereInput");
let QoutesRelationFilter = exports.QoutesRelationFilter = class QoutesRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], QoutesRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], QoutesRelationFilter.prototype, "isNot", void 0);
exports.QoutesRelationFilter = QoutesRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesRelationFilter", {})
], QoutesRelationFilter);
