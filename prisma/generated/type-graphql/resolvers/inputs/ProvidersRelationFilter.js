"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersWhereInput_1 = require("../inputs/ProvidersWhereInput");
let ProvidersRelationFilter = exports.ProvidersRelationFilter = class ProvidersRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereInput_1.ProvidersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereInput_1.ProvidersWhereInput)
], ProvidersRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereInput_1.ProvidersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereInput_1.ProvidersWhereInput)
], ProvidersRelationFilter.prototype, "isNot", void 0);
exports.ProvidersRelationFilter = ProvidersRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersRelationFilter", {})
], ProvidersRelationFilter);
