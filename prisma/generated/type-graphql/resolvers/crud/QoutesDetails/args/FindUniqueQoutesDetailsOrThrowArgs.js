"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueQoutesDetailsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsWhereUniqueInput_1 = require("../../../inputs/QoutesDetailsWhereUniqueInput");
let FindUniqueQoutesDetailsOrThrowArgs = exports.FindUniqueQoutesDetailsOrThrowArgs = class FindUniqueQoutesDetailsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput)
], FindUniqueQoutesDetailsOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueQoutesDetailsOrThrowArgs = FindUniqueQoutesDetailsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueQoutesDetailsOrThrowArgs);
