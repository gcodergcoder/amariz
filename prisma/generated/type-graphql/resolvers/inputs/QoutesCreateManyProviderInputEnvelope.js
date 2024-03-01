"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateManyProviderInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateManyProviderInput_1 = require("../inputs/QoutesCreateManyProviderInput");
let QoutesCreateManyProviderInputEnvelope = exports.QoutesCreateManyProviderInputEnvelope = class QoutesCreateManyProviderInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesCreateManyProviderInput_1.QoutesCreateManyProviderInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesCreateManyProviderInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], QoutesCreateManyProviderInputEnvelope.prototype, "skipDuplicates", void 0);
exports.QoutesCreateManyProviderInputEnvelope = QoutesCreateManyProviderInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateManyProviderInputEnvelope", {})
], QoutesCreateManyProviderInputEnvelope);
