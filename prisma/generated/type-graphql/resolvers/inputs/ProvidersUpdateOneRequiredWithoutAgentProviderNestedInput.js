"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateOrConnectWithoutAgentProviderInput_1 = require("../inputs/ProvidersCreateOrConnectWithoutAgentProviderInput");
const ProvidersCreateWithoutAgentProviderInput_1 = require("../inputs/ProvidersCreateWithoutAgentProviderInput");
const ProvidersUpdateToOneWithWhereWithoutAgentProviderInput_1 = require("../inputs/ProvidersUpdateToOneWithWhereWithoutAgentProviderInput");
const ProvidersUpsertWithoutAgentProviderInput_1 = require("../inputs/ProvidersUpsertWithoutAgentProviderInput");
const ProvidersWhereUniqueInput_1 = require("../inputs/ProvidersWhereUniqueInput");
let ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput = exports.ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput = class ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateWithoutAgentProviderInput_1.ProvidersCreateWithoutAgentProviderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCreateWithoutAgentProviderInput_1.ProvidersCreateWithoutAgentProviderInput)
], ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateOrConnectWithoutAgentProviderInput_1.ProvidersCreateOrConnectWithoutAgentProviderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCreateOrConnectWithoutAgentProviderInput_1.ProvidersCreateOrConnectWithoutAgentProviderInput)
], ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpsertWithoutAgentProviderInput_1.ProvidersUpsertWithoutAgentProviderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersUpsertWithoutAgentProviderInput_1.ProvidersUpsertWithoutAgentProviderInput)
], ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateToOneWithWhereWithoutAgentProviderInput_1.ProvidersUpdateToOneWithWhereWithoutAgentProviderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateToOneWithWhereWithoutAgentProviderInput_1.ProvidersUpdateToOneWithWhereWithoutAgentProviderInput)
], ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput.prototype, "update", void 0);
exports.ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput = ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput", {})
], ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput);
