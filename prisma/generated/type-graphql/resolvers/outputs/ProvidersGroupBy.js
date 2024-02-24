"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCountAggregate_1 = require("../outputs/ProvidersCountAggregate");
const ProvidersMaxAggregate_1 = require("../outputs/ProvidersMaxAggregate");
const ProvidersMinAggregate_1 = require("../outputs/ProvidersMinAggregate");
let ProvidersGroupBy = exports.ProvidersGroupBy = class ProvidersGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProvidersGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProvidersGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCountAggregate_1.ProvidersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCountAggregate_1.ProvidersCountAggregate)
], ProvidersGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersMinAggregate_1.ProvidersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersMinAggregate_1.ProvidersMinAggregate)
], ProvidersGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersMaxAggregate_1.ProvidersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersMaxAggregate_1.ProvidersMaxAggregate)
], ProvidersGroupBy.prototype, "_max", void 0);
exports.ProvidersGroupBy = ProvidersGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProvidersGroupBy", {})
], ProvidersGroupBy);
