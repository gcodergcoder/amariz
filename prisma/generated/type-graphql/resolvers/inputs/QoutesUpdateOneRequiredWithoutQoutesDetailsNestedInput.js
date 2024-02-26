"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateOrConnectWithoutQoutesDetailsInput_1 = require("../inputs/QoutesCreateOrConnectWithoutQoutesDetailsInput");
const QoutesCreateWithoutQoutesDetailsInput_1 = require("../inputs/QoutesCreateWithoutQoutesDetailsInput");
const QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput_1 = require("../inputs/QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput");
const QoutesUpsertWithoutQoutesDetailsInput_1 = require("../inputs/QoutesUpsertWithoutQoutesDetailsInput");
const QoutesWhereUniqueInput_1 = require("../inputs/QoutesWhereUniqueInput");
let QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput = exports.QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput = class QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateWithoutQoutesDetailsInput_1.QoutesCreateWithoutQoutesDetailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCreateWithoutQoutesDetailsInput_1.QoutesCreateWithoutQoutesDetailsInput)
], QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesCreateOrConnectWithoutQoutesDetailsInput_1.QoutesCreateOrConnectWithoutQoutesDetailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesCreateOrConnectWithoutQoutesDetailsInput_1.QoutesCreateOrConnectWithoutQoutesDetailsInput)
], QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpsertWithoutQoutesDetailsInput_1.QoutesUpsertWithoutQoutesDetailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesUpsertWithoutQoutesDetailsInput_1.QoutesUpsertWithoutQoutesDetailsInput)
], QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereUniqueInput_1.QoutesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereUniqueInput_1.QoutesWhereUniqueInput)
], QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput_1.QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput_1.QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput)
], QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput.prototype, "update", void 0);
exports.QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput = QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput", {})
], QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput);
