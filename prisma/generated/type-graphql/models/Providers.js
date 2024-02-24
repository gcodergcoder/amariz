"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCount_1 = require("../resolvers/outputs/ProvidersCount");
let Providers = exports.Providers = class Providers {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Providers.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Providers.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Providers.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Providers.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Providers.prototype, "nit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Providers.prototype, "addredd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCount_1.ProvidersCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCount_1.ProvidersCount)
], Providers.prototype, "_count", void 0);
exports.Providers = Providers = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Providers", {})
], Providers);
