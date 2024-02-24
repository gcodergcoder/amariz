"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCreateManyProviderInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateManyProviderInput_1 = require("../inputs/AgentProviderCreateManyProviderInput");
let AgentProviderCreateManyProviderInputEnvelope = exports.AgentProviderCreateManyProviderInputEnvelope = class AgentProviderCreateManyProviderInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderCreateManyProviderInput_1.AgentProviderCreateManyProviderInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AgentProviderCreateManyProviderInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AgentProviderCreateManyProviderInputEnvelope.prototype, "skipDuplicates", void 0);
exports.AgentProviderCreateManyProviderInputEnvelope = AgentProviderCreateManyProviderInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderCreateManyProviderInputEnvelope", {})
], AgentProviderCreateManyProviderInputEnvelope);
