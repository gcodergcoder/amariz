"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpdateManyWithWhereWithoutProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesScalarWhereInput_1 = require("../inputs/QoutesScalarWhereInput");
const QoutesUpdateManyMutationInput_1 = require("../inputs/QoutesUpdateManyMutationInput");
let QoutesUpdateManyWithWhereWithoutProviderInput = exports.QoutesUpdateManyWithWhereWithoutProviderInput = class QoutesUpdateManyWithWhereWithoutProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesScalarWhereInput_1.QoutesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesScalarWhereInput_1.QoutesScalarWhereInput)
], QoutesUpdateManyWithWhereWithoutProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateManyMutationInput_1.QoutesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesUpdateManyMutationInput_1.QoutesUpdateManyMutationInput)
], QoutesUpdateManyWithWhereWithoutProviderInput.prototype, "data", void 0);
exports.QoutesUpdateManyWithWhereWithoutProviderInput = QoutesUpdateManyWithWhereWithoutProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpdateManyWithWhereWithoutProviderInput", {})
], QoutesUpdateManyWithWhereWithoutProviderInput);
