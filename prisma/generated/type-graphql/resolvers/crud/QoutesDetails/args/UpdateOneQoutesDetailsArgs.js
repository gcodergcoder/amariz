"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneQoutesDetailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsUpdateInput_1 = require("../../../inputs/QoutesDetailsUpdateInput");
const QoutesDetailsWhereUniqueInput_1 = require("../../../inputs/QoutesDetailsWhereUniqueInput");
let UpdateOneQoutesDetailsArgs = exports.UpdateOneQoutesDetailsArgs = class UpdateOneQoutesDetailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsUpdateInput_1.QoutesDetailsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsUpdateInput_1.QoutesDetailsUpdateInput)
], UpdateOneQoutesDetailsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsWhereUniqueInput_1.QoutesDetailsWhereUniqueInput)
], UpdateOneQoutesDetailsArgs.prototype, "where", void 0);
exports.UpdateOneQoutesDetailsArgs = UpdateOneQoutesDetailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneQoutesDetailsArgs);
