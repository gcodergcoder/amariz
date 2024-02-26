"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneQoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateInput_1 = require("../../../inputs/QoutesCreateInput");
const QoutesUpdateInput_1 = require("../../../inputs/QoutesUpdateInput");
const QoutesWhereUniqueInput_1 = require("../../../inputs/QoutesWhereUniqueInput");
let UpsertOneQoutesArgs = exports.UpsertOneQoutesArgs = class UpsertOneQoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], UpsertOneQoutesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateInput_1.QoutesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesCreateInput_1.QoutesCreateInput)
], UpsertOneQoutesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateInput_1.QoutesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesUpdateInput_1.QoutesUpdateInput)
], UpsertOneQoutesArgs.prototype, "update", void 0);
exports.UpsertOneQoutesArgs = UpsertOneQoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneQoutesArgs);
