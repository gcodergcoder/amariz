"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersCreateOrConnectWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateWithoutAgentProviderInput_1 = require("../inputs/ProvidersCreateWithoutAgentProviderInput");
const ProvidersWhereUniqueInput_1 = require("../inputs/ProvidersWhereUniqueInput");
let ProvidersCreateOrConnectWithoutAgentProviderInput = exports.ProvidersCreateOrConnectWithoutAgentProviderInput = class ProvidersCreateOrConnectWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], ProvidersCreateOrConnectWithoutAgentProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateWithoutAgentProviderInput_1.ProvidersCreateWithoutAgentProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateWithoutAgentProviderInput_1.ProvidersCreateWithoutAgentProviderInput)
], ProvidersCreateOrConnectWithoutAgentProviderInput.prototype, "create", void 0);
exports.ProvidersCreateOrConnectWithoutAgentProviderInput = ProvidersCreateOrConnectWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersCreateOrConnectWithoutAgentProviderInput", {})
], ProvidersCreateOrConnectWithoutAgentProviderInput);
