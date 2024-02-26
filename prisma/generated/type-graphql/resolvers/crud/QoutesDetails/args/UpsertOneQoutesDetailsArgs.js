"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneQoutesDetailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsCreateInput_1 = require("../../../inputs/QoutesDetailsCreateInput");
const QoutesDetailsUpdateInput_1 = require("../../../inputs/QoutesDetailsUpdateInput");
const QoutesDetailsWhereUniqueInput_1 = require("../../../inputs/QoutesDetailsWhereUniqueInput");
let UpsertOneQoutesDetailsArgs = exports.UpsertOneQoutesDetailsArgs = class UpsertOneQoutesDetailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput)
], UpsertOneQoutesDetailsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCreateInput_1.QoutesDetailsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCreateInput_1.QoutesDetailsCreateInput)
], UpsertOneQoutesDetailsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsUpdateInput_1.QoutesDetailsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsUpdateInput_1.QoutesDetailsUpdateInput)
], UpsertOneQoutesDetailsArgs.prototype, "update", void 0);
exports.UpsertOneQoutesDetailsArgs = UpsertOneQoutesDetailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneQoutesDetailsArgs);
