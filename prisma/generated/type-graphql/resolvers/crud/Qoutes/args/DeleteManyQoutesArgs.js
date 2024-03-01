"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyQoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesWhereInput_1 = require("../../../inputs/QoutesWhereInput");
let DeleteManyQoutesArgs = exports.DeleteManyQoutesArgs = class DeleteManyQoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], DeleteManyQoutesArgs.prototype, "where", void 0);
exports.DeleteManyQoutesArgs = DeleteManyQoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyQoutesArgs);
