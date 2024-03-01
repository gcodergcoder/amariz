"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueQoutesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesWhereUniqueInput_1 = require("../../../inputs/QoutesWhereUniqueInput");
let FindUniqueQoutesOrThrowArgs = exports.FindUniqueQoutesOrThrowArgs = class FindUniqueQoutesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], FindUniqueQoutesOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueQoutesOrThrowArgs = FindUniqueQoutesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueQoutesOrThrowArgs);
