"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQoutes = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCountAggregate_1 = require("../outputs/QoutesCountAggregate");
const QoutesMaxAggregate_1 = require("../outputs/QoutesMaxAggregate");
const QoutesMinAggregate_1 = require("../outputs/QoutesMinAggregate");
let AggregateQoutes = exports.AggregateQoutes = class AggregateQoutes {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCountAggregate_1.QoutesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCountAggregate_1.QoutesCountAggregate)
], AggregateQoutes.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesMinAggregate_1.QoutesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesMinAggregate_1.QoutesMinAggregate)
], AggregateQoutes.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesMaxAggregate_1.QoutesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesMaxAggregate_1.QoutesMaxAggregate)
], AggregateQoutes.prototype, "_max", void 0);
exports.AggregateQoutes = AggregateQoutes = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateQoutes", {})
], AggregateQoutes);
