"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsCreateManyQoutesInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsCreateManyQoutesInput_1 = require("../inputs/QoutesDetailsCreateManyQoutesInput");
let QoutesDetailsCreateManyQoutesInputEnvelope = exports.QoutesDetailsCreateManyQoutesInputEnvelope = class QoutesDetailsCreateManyQoutesInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsCreateManyQoutesInput_1.QoutesDetailsCreateManyQoutesInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesDetailsCreateManyQoutesInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], QoutesDetailsCreateManyQoutesInputEnvelope.prototype, "skipDuplicates", void 0);
exports.QoutesDetailsCreateManyQoutesInputEnvelope = QoutesDetailsCreateManyQoutesInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesDetailsCreateManyQoutesInputEnvelope", {})
], QoutesDetailsCreateManyQoutesInputEnvelope);
