"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let QoutesDetailsAvgAggregate = exports.QoutesDetailsAvgAggregate = class QoutesDetailsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QoutesDetailsAvgAggregate.prototype, "unit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QoutesDetailsAvgAggregate.prototype, "price", void 0);
exports.QoutesDetailsAvgAggregate = QoutesDetailsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("QoutesDetailsAvgAggregate", {})
], QoutesDetailsAvgAggregate);
