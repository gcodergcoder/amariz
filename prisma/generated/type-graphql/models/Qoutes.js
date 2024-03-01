"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Qoutes = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCount_1 = require("../resolvers/outputs/QoutesCount");
let Qoutes = exports.Qoutes = class Qoutes {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Qoutes.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Qoutes.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Qoutes.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Qoutes.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Qoutes.prototype, "agentProviderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCount_1.QoutesCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCount_1.QoutesCount)
], Qoutes.prototype, "_count", void 0);
exports.Qoutes = Qoutes = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Qoutes", {})
], Qoutes);
