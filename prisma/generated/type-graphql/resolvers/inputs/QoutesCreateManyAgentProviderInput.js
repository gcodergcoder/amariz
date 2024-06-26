"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateManyAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let QoutesCreateManyAgentProviderInput = exports.QoutesCreateManyAgentProviderInput = class QoutesCreateManyAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesCreateManyAgentProviderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateManyAgentProviderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateManyAgentProviderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesCreateManyAgentProviderInput.prototype, "expireAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QoutesCreateManyAgentProviderInput.prototype, "providerId", void 0);
exports.QoutesCreateManyAgentProviderInput = QoutesCreateManyAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateManyAgentProviderInput", {})
], QoutesCreateManyAgentProviderInput);
