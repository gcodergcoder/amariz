"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderUpdateOneRequiredWithoutQoutesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateOrConnectWithoutQoutesInput_1 = require("../inputs/AgentProviderCreateOrConnectWithoutQoutesInput");
const AgentProviderCreateWithoutQoutesInput_1 = require("../inputs/AgentProviderCreateWithoutQoutesInput");
const AgentProviderUpdateToOneWithWhereWithoutQoutesInput_1 = require("../inputs/AgentProviderUpdateToOneWithWhereWithoutQoutesInput");
const AgentProviderUpsertWithoutQoutesInput_1 = require("../inputs/AgentProviderUpsertWithoutQoutesInput");
const AgentProviderWhereUniqueInput_1 = require("../inputs/AgentProviderWhereUniqueInput");
let AgentProviderUpdateOneRequiredWithoutQoutesNestedInput = exports.AgentProviderUpdateOneRequiredWithoutQoutesNestedInput = class AgentProviderUpdateOneRequiredWithoutQoutesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateWithoutQoutesInput_1.AgentProviderCreateWithoutQoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateWithoutQoutesInput_1.AgentProviderCreateWithoutQoutesInput)
], AgentProviderUpdateOneRequiredWithoutQoutesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderCreateOrConnectWithoutQoutesInput_1.AgentProviderCreateOrConnectWithoutQoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderCreateOrConnectWithoutQoutesInput_1.AgentProviderCreateOrConnectWithoutQoutesInput)
], AgentProviderUpdateOneRequiredWithoutQoutesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpsertWithoutQoutesInput_1.AgentProviderUpsertWithoutQoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderUpsertWithoutQoutesInput_1.AgentProviderUpsertWithoutQoutesInput)
], AgentProviderUpdateOneRequiredWithoutQoutesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereUniqueInput_1.AgentProviderWhereUniqueInput)
], AgentProviderUpdateOneRequiredWithoutQoutesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderUpdateToOneWithWhereWithoutQoutesInput_1.AgentProviderUpdateToOneWithWhereWithoutQoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderUpdateToOneWithWhereWithoutQoutesInput_1.AgentProviderUpdateToOneWithWhereWithoutQoutesInput)
], AgentProviderUpdateOneRequiredWithoutQoutesNestedInput.prototype, "update", void 0);
exports.AgentProviderUpdateOneRequiredWithoutQoutesNestedInput = AgentProviderUpdateOneRequiredWithoutQoutesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderUpdateOneRequiredWithoutQoutesNestedInput", {})
], AgentProviderUpdateOneRequiredWithoutQoutesNestedInput);
