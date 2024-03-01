"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let QoutesMinAggregate = exports.QoutesMinAggregate = class QoutesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QoutesMinAggregate.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesMinAggregate.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QoutesMinAggregate.prototype, "agentProviderId", void 0);
exports.QoutesMinAggregate = QoutesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("QoutesMinAggregate", {})
], QoutesMinAggregate);
