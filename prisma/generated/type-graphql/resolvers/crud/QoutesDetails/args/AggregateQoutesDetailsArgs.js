"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQoutesDetailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsOrderByWithRelationInput_1 = require("../../../inputs/QoutesDetailsOrderByWithRelationInput");
const QoutesDetailsWhereInput_1 = require("../../../inputs/QoutesDetailsWhereInput");
const QoutesDetailsWhereUniqueInput_1 = require("../../../inputs/QoutesDetailsWhereUniqueInput");
let AggregateQoutesDetailsArgs = exports.AggregateQoutesDetailsArgs = class AggregateQoutesDetailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereInput_1.QoutesDetailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereInput_1.QoutesDetailsWhereInput)
], AggregateQoutesDetailsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsOrderByWithRelationInput_1.QoutesDetailsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateQoutesDetailsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput)
], AggregateQoutesDetailsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateQoutesDetailsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateQoutesDetailsArgs.prototype, "skip", void 0);
exports.AggregateQoutesDetailsArgs = AggregateQoutesDetailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateQoutesDetailsArgs);
