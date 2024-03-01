"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let QoutesDetailsSumAggregate = exports.QoutesDetailsSumAggregate = class QoutesDetailsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QoutesDetailsSumAggregate.prototype, "unit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QoutesDetailsSumAggregate.prototype, "price", void 0);
exports.QoutesDetailsSumAggregate = QoutesDetailsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("QoutesDetailsSumAggregate", {})
], QoutesDetailsSumAggregate);
