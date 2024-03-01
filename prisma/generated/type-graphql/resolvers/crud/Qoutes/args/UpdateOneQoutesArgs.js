"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneQoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesUpdateInput_1 = require("../../../inputs/QoutesUpdateInput");
const QoutesWhereUniqueInput_1 = require("../../../inputs/QoutesWhereUniqueInput");
let UpdateOneQoutesArgs = exports.UpdateOneQoutesArgs = class UpdateOneQoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateInput_1.QoutesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesUpdateInput_1.QoutesUpdateInput)
], UpdateOneQoutesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], UpdateOneQoutesArgs.prototype, "where", void 0);
exports.UpdateOneQoutesArgs = UpdateOneQoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneQoutesArgs);
