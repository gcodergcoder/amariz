"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderUpsertWithoutQoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateWithoutQoutesInput_1 = require("../inputs/AgentProviderCreateWithoutQoutesInput");
const AgentProviderUpdateWithoutQoutesInput_1 = require("../inputs/AgentProviderUpdateWithoutQoutesInput");
const AgentProviderWhereInput_1 = require("../inputs/AgentProviderWhereInput");
let AgentProviderUpsertWithoutQoutesInput = exports.AgentProviderUpsertWithoutQoutesInput = class AgentProviderUpsertWithoutQoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateWithoutQoutesInput_1.AgentProviderUpdateWithoutQoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateWithoutQoutesInput_1.AgentProviderUpdateWithoutQoutesInput)
], AgentProviderUpsertWithoutQoutesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateWithoutQoutesInput_1.AgentProviderCreateWithoutQoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateWithoutQoutesInput_1.AgentProviderCreateWithoutQoutesInput)
], AgentProviderUpsertWithoutQoutesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], AgentProviderUpsertWithoutQoutesInput.prototype, "where", void 0);
exports.AgentProviderUpsertWithoutQoutesInput = AgentProviderUpsertWithoutQoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderUpsertWithoutQoutesInput", {})
], AgentProviderUpsertWithoutQoutesInput);
