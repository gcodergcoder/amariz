"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderAvgAggregate_1 = require("../outputs/AgentProviderAvgAggregate");
const AgentProviderCountAggregate_1 = require("../outputs/AgentProviderCountAggregate");
const AgentProviderMaxAggregate_1 = require("../outputs/AgentProviderMaxAggregate");
const AgentProviderMinAggregate_1 = require("../outputs/AgentProviderMinAggregate");
const AgentProviderSumAggregate_1 = require("../outputs/AgentProviderSumAggregate");
let AgentProviderGroupBy = exports.AgentProviderGroupBy = class AgentProviderGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AgentProviderGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProviderGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AgentProviderGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderGroupBy.prototype, "surName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderGroupBy.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AgentProviderGroupBy.prototype, "providerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCountAggregate_1.AgentProviderCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCountAggregate_1.AgentProviderCountAggregate)
], AgentProviderGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderAvgAggregate_1.AgentProviderAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderAvgAggregate_1.AgentProviderAvgAggregate)
], AgentProviderGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderSumAggregate_1.AgentProviderSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderSumAggregate_1.AgentProviderSumAggregate)
], AgentProviderGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderMinAggregate_1.AgentProviderMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderMinAggregate_1.AgentProviderMinAggregate)
], AgentProviderGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderMaxAggregate_1.AgentProviderMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderMaxAggregate_1.AgentProviderMaxAggregate)
], AgentProviderGroupBy.prototype, "_max", void 0);
exports.AgentProviderGroupBy = AgentProviderGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AgentProviderGroupBy", {})
], AgentProviderGroupBy);
