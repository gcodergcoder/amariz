"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersCreateOrConnectWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateWithoutQuotesInput_1 = require("../inputs/ProvidersCreateWithoutQuotesInput");
const ProvidersWhereUniqueInput_1 = require("../inputs/ProvidersWhereUniqueInput");
let ProvidersCreateOrConnectWithoutQuotesInput = exports.ProvidersCreateOrConnectWithoutQuotesInput = class ProvidersCreateOrConnectWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], ProvidersCreateOrConnectWithoutQuotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateWithoutQuotesInput_1.ProvidersCreateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateWithoutQuotesInput_1.ProvidersCreateWithoutQuotesInput)
], ProvidersCreateOrConnectWithoutQuotesInput.prototype, "create", void 0);
exports.ProvidersCreateOrConnectWithoutQuotesInput = ProvidersCreateOrConnectWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersCreateOrConnectWithoutQuotesInput", {})
], ProvidersCreateOrConnectWithoutQuotesInput);
