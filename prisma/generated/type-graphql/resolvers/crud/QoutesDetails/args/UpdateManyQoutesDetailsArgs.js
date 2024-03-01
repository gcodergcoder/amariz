"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyQoutesDetailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsUpdateManyMutationInput_1 = require("../../../inputs/QoutesDetailsUpdateManyMutationInput");
const QoutesDetailsWhereInput_1 = require("../../../inputs/QoutesDetailsWhereInput");
let UpdateManyQoutesDetailsArgs = exports.UpdateManyQoutesDetailsArgs = class UpdateManyQoutesDetailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsUpdateManyMutationInput_1.QoutesDetailsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsUpdateManyMutationInput_1.QoutesDetailsUpdateManyMutationInput)
], UpdateManyQoutesDetailsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereInput_1.QoutesDetailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereInput_1.QoutesDetailsWhereInput)
], UpdateManyQoutesDetailsArgs.prototype, "where", void 0);
exports.UpdateManyQoutesDetailsArgs = UpdateManyQoutesDetailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyQoutesDetailsArgs);
