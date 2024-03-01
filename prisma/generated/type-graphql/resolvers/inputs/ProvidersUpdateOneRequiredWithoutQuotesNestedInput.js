"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersUpdateOneRequiredWithoutQuotesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateOrConnectWithoutQuotesInput_1 = require("../inputs/ProvidersCreateOrConnectWithoutQuotesInput");
const ProvidersCreateWithoutQuotesInput_1 = require("../inputs/ProvidersCreateWithoutQuotesInput");
const ProvidersUpdateToOneWithWhereWithoutQuotesInput_1 = require("../inputs/ProvidersUpdateToOneWithWhereWithoutQuotesInput");
const ProvidersUpsertWithoutQuotesInput_1 = require("../inputs/ProvidersUpsertWithoutQuotesInput");
const ProvidersWhereUniqueInput_1 = require("../inputs/ProvidersWhereUniqueInput");
let ProvidersUpdateOneRequiredWithoutQuotesNestedInput = exports.ProvidersUpdateOneRequiredWithoutQuotesNestedInput = class ProvidersUpdateOneRequiredWithoutQuotesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateWithoutQuotesInput_1.ProvidersCreateWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCreateWithoutQuotesInput_1.ProvidersCreateWithoutQuotesInput)
], ProvidersUpdateOneRequiredWithoutQuotesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCreateOrConnectWithoutQuotesInput_1.ProvidersCreateOrConnectWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCreateOrConnectWithoutQuotesInput_1.ProvidersCreateOrConnectWithoutQuotesInput)
], ProvidersUpdateOneRequiredWithoutQuotesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpsertWithoutQuotesInput_1.ProvidersUpsertWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersUpsertWithoutQuotesInput_1.ProvidersUpsertWithoutQuotesInput)
], ProvidersUpdateOneRequiredWithoutQuotesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], ProvidersUpdateOneRequiredWithoutQuotesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateToOneWithWhereWithoutQuotesInput_1.ProvidersUpdateToOneWithWhereWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateToOneWithWhereWithoutQuotesInput_1.ProvidersUpdateToOneWithWhereWithoutQuotesInput)
], ProvidersUpdateOneRequiredWithoutQuotesNestedInput.prototype, "update", void 0);
exports.ProvidersUpdateOneRequiredWithoutQuotesNestedInput = ProvidersUpdateOneRequiredWithoutQuotesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersUpdateOneRequiredWithoutQuotesNestedInput", {})
], ProvidersUpdateOneRequiredWithoutQuotesNestedInput);
