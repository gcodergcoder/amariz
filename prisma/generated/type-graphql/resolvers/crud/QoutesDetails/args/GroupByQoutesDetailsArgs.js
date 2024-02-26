"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByQoutesDetailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsOrderByWithAggregationInput_1 = require("../../../inputs/QoutesDetailsOrderByWithAggregationInput");
const QoutesDetailsScalarWhereWithAggregatesInput_1 = require("../../../inputs/QoutesDetailsScalarWhereWithAggregatesInput");
const QoutesDetailsWhereInput_1 = require("../../../inputs/QoutesDetailsWhereInput");
const QoutesDetailsScalarFieldEnum_1 = require("../../../../enums/QoutesDetailsScalarFieldEnum");
let GroupByQoutesDetailsArgs = exports.GroupByQoutesDetailsArgs = class GroupByQoutesDetailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereInput_1.QoutesDetailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereInput_1.QoutesDetailsWhereInput)
], GroupByQoutesDetailsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsOrderByWithAggregationInput_1.QoutesDetailsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByQoutesDetailsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsScalarFieldEnum_1.QoutesDetailsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByQoutesDetailsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsScalarWhereWithAggregatesInput_1.QoutesDetailsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsScalarWhereWithAggregatesInput_1.QoutesDetailsScalarWhereWithAggregatesInput)
], GroupByQoutesDetailsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByQoutesDetailsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByQoutesDetailsArgs.prototype, "skip", void 0);
exports.GroupByQoutesDetailsArgs = GroupByQoutesDetailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByQoutesDetailsArgs);
