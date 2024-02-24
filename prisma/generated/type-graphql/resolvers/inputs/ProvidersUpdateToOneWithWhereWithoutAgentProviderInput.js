"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersUpdateToOneWithWhereWithoutAgentProviderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersUpdateWithoutAgentProviderInput_1 = require("../inputs/ProvidersUpdateWithoutAgentProviderInput");
const ProvidersWhereInput_1 = require("../inputs/ProvidersWhereInput");
let ProvidersUpdateToOneWithWhereWithoutAgentProviderInput = exports.ProvidersUpdateToOneWithWhereWithoutAgentProviderInput = class ProvidersUpdateToOneWithWhereWithoutAgentProviderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereInput_1.ProvidersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereInput_1.ProvidersWhereInput)
], ProvidersUpdateToOneWithWhereWithoutAgentProviderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateWithoutAgentProviderInput_1.ProvidersUpdateWithoutAgentProviderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateWithoutAgentProviderInput_1.ProvidersUpdateWithoutAgentProviderInput)
], ProvidersUpdateToOneWithWhereWithoutAgentProviderInput.prototype, "data", void 0);
exports.ProvidersUpdateToOneWithWhereWithoutAgentProviderInput = ProvidersUpdateToOneWithWhereWithoutAgentProviderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersUpdateToOneWithWhereWithoutAgentProviderInput", {})
], ProvidersUpdateToOneWithWhereWithoutAgentProviderInput);
