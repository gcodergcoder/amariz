"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyQoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesUpdateManyMutationInput_1 = require("../../../inputs/QoutesUpdateManyMutationInput");
const QoutesWhereInput_1 = require("../../../inputs/QoutesWhereInput");
let UpdateManyQoutesArgs = exports.UpdateManyQoutesArgs = class UpdateManyQoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateManyMutationInput_1.QoutesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesUpdateManyMutationInput_1.QoutesUpdateManyMutationInput)
], UpdateManyQoutesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], UpdateManyQoutesArgs.prototype, "where", void 0);
exports.UpdateManyQoutesArgs = UpdateManyQoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyQoutesArgs);
