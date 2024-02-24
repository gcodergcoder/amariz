"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProvidersSumAggregate = exports.ProvidersSumAggregate = class ProvidersSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProvidersSumAggregate.prototype, "id", void 0);
exports.ProvidersSumAggregate = ProvidersSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProvidersSumAggregate", {})
], ProvidersSumAggregate);
