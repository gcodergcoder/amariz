"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQoutesDetails = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsAvgAggregate_1 = require("../outputs/QoutesDetailsAvgAggregate");
const QoutesDetailsCountAggregate_1 = require("../outputs/QoutesDetailsCountAggregate");
const QoutesDetailsMaxAggregate_1 = require("../outputs/QoutesDetailsMaxAggregate");
const QoutesDetailsMinAggregate_1 = require("../outputs/QoutesDetailsMinAggregate");
const QoutesDetailsSumAggregate_1 = require("../outputs/QoutesDetailsSumAggregate");
let AggregateQoutesDetails = exports.AggregateQoutesDetails = class AggregateQoutesDetails {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCountAggregate_1.QoutesDetailsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCountAggregate_1.QoutesDetailsCountAggregate)
], AggregateQoutesDetails.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsAvgAggregate_1.QoutesDetailsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsAvgAggregate_1.QoutesDetailsAvgAggregate)
], AggregateQoutesDetails.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsSumAggregate_1.QoutesDetailsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsSumAggregate_1.QoutesDetailsSumAggregate)
], AggregateQoutesDetails.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsMinAggregate_1.QoutesDetailsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsMinAggregate_1.QoutesDetailsMinAggregate)
], AggregateQoutesDetails.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsMaxAggregate_1.QoutesDetailsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsMaxAggregate_1.QoutesDetailsMaxAggregate)
], AggregateQoutesDetails.prototype, "_max", void 0);
exports.AggregateQoutesDetails = AggregateQoutesDetails = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateQoutesDetails", {})
], AggregateQoutesDetails);
