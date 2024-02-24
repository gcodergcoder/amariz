"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersCreateNestedOneWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateOrConnectWithoutAgentProviderInput_1 = require("../inputs/ProvidersCreateOrConnectWithoutAgentProviderInput");
const ProvidersCreateWithoutAgentProviderInput_1 = require("../inputs/ProvidersCreateWithoutAgentProviderInput");
const ProvidersWhereUniqueInput_1 = require("../inputs/ProvidersWhereUniqueInput");
let ProvidersCreateNestedOneWithoutAgentProviderInput = exports.ProvidersCreateNestedOneWithoutAgentProviderInput = class ProvidersCreateNestedOneWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateWithoutAgentProviderInput_1.ProvidersCreateWithoutAgentProviderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCreateWithoutAgentProviderInput_1.ProvidersCreateWithoutAgentProviderInput)
], ProvidersCreateNestedOneWithoutAgentProviderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateOrConnectWithoutAgentProviderInput_1.ProvidersCreateOrConnectWithoutAgentProviderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCreateOrConnectWithoutAgentProviderInput_1.ProvidersCreateOrConnectWithoutAgentProviderInput)
], ProvidersCreateNestedOneWithoutAgentProviderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], ProvidersCreateNestedOneWithoutAgentProviderInput.prototype, "connect", void 0);
exports.ProvidersCreateNestedOneWithoutAgentProviderInput = ProvidersCreateNestedOneWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersCreateNestedOneWithoutAgentProviderInput", {})
], ProvidersCreateNestedOneWithoutAgentProviderInput);
