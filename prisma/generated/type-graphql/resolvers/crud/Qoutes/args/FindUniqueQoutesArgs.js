"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueQoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesWhereUniqueInput_1 = require("../../../inputs/QoutesWhereUniqueInput");
let FindUniqueQoutesArgs = exports.FindUniqueQoutesArgs = class FindUniqueQoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], FindUniqueQoutesArgs.prototype, "where", void 0);
exports.FindUniqueQoutesArgs = FindUniqueQoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueQoutesArgs);
