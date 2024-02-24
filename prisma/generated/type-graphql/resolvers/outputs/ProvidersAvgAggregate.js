"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProvidersAvgAggregate = exports.ProvidersAvgAggregate = class ProvidersAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProvidersAvgAggregate.prototype, "id", void 0);
exports.ProvidersAvgAggregate = ProvidersAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProvidersAvgAggregate", {})
], ProvidersAvgAggregate);
