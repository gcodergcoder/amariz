"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCreateManyAgentProviderInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateManyAgentProviderInput_1 = require("../inputs/QoutesCreateManyAgentProviderInput");
let QoutesCreateManyAgentProviderInputEnvelope = exports.QoutesCreateManyAgentProviderInputEnvelope = class QoutesCreateManyAgentProviderInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesCreateManyAgentProviderInput_1.QoutesCreateManyAgentProviderInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], QoutesCreateManyAgentProviderInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], QoutesCreateManyAgentProviderInputEnvelope.prototype, "skipDuplicates", void 0);
exports.QoutesCreateManyAgentProviderInputEnvelope = QoutesCreateManyAgentProviderInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("QoutesCreateManyAgentProviderInputEnvelope", {})
], QoutesCreateManyAgentProviderInputEnvelope);
