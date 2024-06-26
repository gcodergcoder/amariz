"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCountAggregate_1 = require("../outputs/QoutesCountAggregate");
const QoutesMaxAggregate_1 = require("../outputs/QoutesMaxAggregate");
const QoutesMinAggregate_1 = require("../outputs/QoutesMinAggregate");
let QoutesGroupBy = exports.QoutesGroupBy = class QoutesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QoutesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesGroupBy.prototype, "expireAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QoutesGroupBy.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QoutesGroupBy.prototype, "agentProviderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCountAggregate_1.QoutesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCountAggregate_1.QoutesCountAggregate)
], QoutesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesMinAggregate_1.QoutesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesMinAggregate_1.QoutesMinAggregate)
], QoutesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesMaxAggregate_1.QoutesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesMaxAggregate_1.QoutesMaxAggregate)
], QoutesGroupBy.prototype, "_max", void 0);
exports.QoutesGroupBy = QoutesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("QoutesGroupBy", {})
], QoutesGroupBy);
