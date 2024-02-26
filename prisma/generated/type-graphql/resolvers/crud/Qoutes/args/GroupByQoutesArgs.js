"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByQoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesOrderByWithAggregationInput_1 = require("../../../inputs/QoutesOrderByWithAggregationInput");
const QoutesScalarWhereWithAggregatesInput_1 = require("../../../inputs/QoutesScalarWhereWithAggregatesInput");
const QoutesWhereInput_1 = require("../../../inputs/QoutesWhereInput");
const QoutesScalarFieldEnum_1 = require("../../../../enums/QoutesScalarFieldEnum");
let GroupByQoutesArgs = exports.GroupByQoutesArgs = class GroupByQoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], GroupByQoutesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesOrderByWithAggregationInput_1.QoutesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByQoutesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesScalarFieldEnum_1.QoutesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByQoutesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesScalarWhereWithAggregatesInput_1.QoutesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesScalarWhereWithAggregatesInput_1.QoutesScalarWhereWithAggregatesInput)
], GroupByQoutesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByQoutesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByQoutesArgs.prototype, "skip", void 0);
exports.GroupByQoutesArgs = GroupByQoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByQoutesArgs);
