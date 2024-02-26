"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneQoutesDetailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsWhereUniqueInput_1 = require("../../../inputs/QoutesDetailsWhereUniqueInput");
let DeleteOneQoutesDetailsArgs = exports.DeleteOneQoutesDetailsArgs = class DeleteOneQoutesDetailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput)
], DeleteOneQoutesDetailsArgs.prototype, "where", void 0);
exports.DeleteOneQoutesDetailsArgs = DeleteOneQoutesDetailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneQoutesDetailsArgs);
