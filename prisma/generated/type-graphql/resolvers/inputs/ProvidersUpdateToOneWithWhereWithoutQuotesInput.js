"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersUpdateToOneWithWhereWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersUpdateWithoutQuotesInput_1 = require("../inputs/ProvidersUpdateWithoutQuotesInput");
const ProvidersWhereInput_1 = require("../inputs/ProvidersWhereInput");
let ProvidersUpdateToOneWithWhereWithoutQuotesInput = exports.ProvidersUpdateToOneWithWhereWithoutQuotesInput = class ProvidersUpdateToOneWithWhereWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereInput_1.ProvidersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereInput_1.ProvidersWhereInput)
], ProvidersUpdateToOneWithWhereWithoutQuotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateWithoutQuotesInput_1.ProvidersUpdateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateWithoutQuotesInput_1.ProvidersUpdateWithoutQuotesInput)
], ProvidersUpdateToOneWithWhereWithoutQuotesInput.prototype, "data", void 0);
exports.ProvidersUpdateToOneWithWhereWithoutQuotesInput = ProvidersUpdateToOneWithWhereWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersUpdateToOneWithWhereWithoutQuotesInput", {})
], ProvidersUpdateToOneWithWhereWithoutQuotesInput);
