"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateManyProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let QoutesCreateManyProviderInput = exports.QoutesCreateManyProviderInput = class QoutesCreateManyProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesCreateManyProviderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateManyProviderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateManyProviderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateManyProviderInput.prototype, "expireAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QoutesCreateManyProviderInput.prototype, "agentProviderId", void 0);
exports.QoutesCreateManyProviderInput = QoutesCreateManyProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateManyProviderInput", {})
], QoutesCreateManyProviderInput);
