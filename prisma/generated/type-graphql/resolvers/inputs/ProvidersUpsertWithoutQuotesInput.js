"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersUpsertWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateWithoutQuotesInput_1 = require("../inputs/ProvidersCreateWithoutQuotesInput");
const ProvidersUpdateWithoutQuotesInput_1 = require("../inputs/ProvidersUpdateWithoutQuotesInput");
const ProvidersWhereInput_1 = require("../inputs/ProvidersWhereInput");
let ProvidersUpsertWithoutQuotesInput = exports.ProvidersUpsertWithoutQuotesInput = class ProvidersUpsertWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateWithoutQuotesInput_1.ProvidersUpdateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateWithoutQuotesInput_1.ProvidersUpdateWithoutQuotesInput)
], ProvidersUpsertWithoutQuotesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateWithoutQuotesInput_1.ProvidersCreateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersCreateWithoutQuotesInput_1.ProvidersCreateWithoutQuotesInput)
], ProvidersUpsertWithoutQuotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereInput_1.ProvidersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereInput_1.ProvidersWhereInput)
], ProvidersUpsertWithoutQuotesInput.prototype, "where", void 0);
exports.ProvidersUpsertWithoutQuotesInput = ProvidersUpsertWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersUpsertWithoutQuotesInput", {})
], ProvidersUpsertWithoutQuotesInput);
