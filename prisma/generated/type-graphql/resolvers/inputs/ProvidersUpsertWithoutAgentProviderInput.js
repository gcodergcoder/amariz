"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersUpsertWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateWithoutAgentProviderInput_1 = require("../inputs/ProvidersCreateWithoutAgentProviderInput");
const ProvidersUpdateWithoutAgentProviderInput_1 = require("../inputs/ProvidersUpdateWithoutAgentProviderInput");
const ProvidersWhereInput_1 = require("../inputs/ProvidersWhereInput");
let ProvidersUpsertWithoutAgentProviderInput = exports.ProvidersUpsertWithoutAgentProviderInput = class ProvidersUpsertWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateWithoutAgentProviderInput_1.ProvidersUpdateWithoutAgentProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateWithoutAgentProviderInput_1.ProvidersUpdateWithoutAgentProviderInput)
], ProvidersUpsertWithoutAgentProviderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateWithoutAgentProviderInput_1.ProvidersCreateWithoutAgentProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateWithoutAgentProviderInput_1.ProvidersCreateWithoutAgentProviderInput)
], ProvidersUpsertWithoutAgentProviderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereInput_1.ProvidersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereInput_1.ProvidersWhereInput)
], ProvidersUpsertWithoutAgentProviderInput.prototype, "where", void 0);
exports.ProvidersUpsertWithoutAgentProviderInput = ProvidersUpsertWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersUpsertWithoutAgentProviderInput", {})
], ProvidersUpsertWithoutAgentProviderInput);
