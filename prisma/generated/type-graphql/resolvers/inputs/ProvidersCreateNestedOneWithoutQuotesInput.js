"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersCreateNestedOneWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateOrConnectWithoutQuotesInput_1 = require("../inputs/ProvidersCreateOrConnectWithoutQuotesInput");
const ProvidersCreateWithoutQuotesInput_1 = require("../inputs/ProvidersCreateWithoutQuotesInput");
const ProvidersWhereUniqueInput_1 = require("../inputs/ProvidersWhereUniqueInput");
let ProvidersCreateNestedOneWithoutQuotesInput = exports.ProvidersCreateNestedOneWithoutQuotesInput = class ProvidersCreateNestedOneWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateWithoutQuotesInput_1.ProvidersCreateWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCreateWithoutQuotesInput_1.ProvidersCreateWithoutQuotesInput)
], ProvidersCreateNestedOneWithoutQuotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateOrConnectWithoutQuotesInput_1.ProvidersCreateOrConnectWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCreateOrConnectWithoutQuotesInput_1.ProvidersCreateOrConnectWithoutQuotesInput)
], ProvidersCreateNestedOneWithoutQuotesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], ProvidersCreateNestedOneWithoutQuotesInput.prototype, "connect", void 0);
exports.ProvidersCreateNestedOneWithoutQuotesInput = ProvidersCreateNestedOneWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersCreateNestedOneWithoutQuotesInput", {})
], ProvidersCreateNestedOneWithoutQuotesInput);
