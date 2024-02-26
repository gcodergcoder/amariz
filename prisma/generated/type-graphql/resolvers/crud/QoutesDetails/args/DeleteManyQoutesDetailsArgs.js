"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyQoutesDetailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsWhereInput_1 = require("../../../inputs/QoutesDetailsWhereInput");
let DeleteManyQoutesDetailsArgs = exports.DeleteManyQoutesDetailsArgs = class DeleteManyQoutesDetailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereInput_1.QoutesDetailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereInput_1.QoutesDetailsWhereInput)
], DeleteManyQoutesDetailsArgs.prototype, "where", void 0);
exports.DeleteManyQoutesDetailsArgs = DeleteManyQoutesDetailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyQoutesDetailsArgs);
