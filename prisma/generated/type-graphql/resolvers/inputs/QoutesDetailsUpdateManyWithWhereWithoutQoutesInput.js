"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsUpdateManyWithWhereWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsScalarWhereInput_1 = require("../inputs/QoutesDetailsScalarWhereInput");
const QoutesDetailsUpdateManyMutationInput_1 = require("../inputs/QoutesDetailsUpdateManyMutationInput");
let QoutesDetailsUpdateManyWithWhereWithoutQoutesInput = exports.QoutesDetailsUpdateManyWithWhereWithoutQoutesInput = class QoutesDetailsUpdateManyWithWhereWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsScalarWhereInput_1.QoutesDetailsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsScalarWhereInput_1.QoutesDetailsScalarWhereInput)
], QoutesDetailsUpdateManyWithWhereWithoutQoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsUpdateManyMutationInput_1.QoutesDetailsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsUpdateManyMutationInput_1.QoutesDetailsUpdateManyMutationInput)
], QoutesDetailsUpdateManyWithWhereWithoutQoutesInput.prototype, "data", void 0);
exports.QoutesDetailsUpdateManyWithWhereWithoutQoutesInput = QoutesDetailsUpdateManyWithWhereWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsUpdateManyWithWhereWithoutQoutesInput", {})
], QoutesDetailsUpdateManyWithWhereWithoutQoutesInput);
