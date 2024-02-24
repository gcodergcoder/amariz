"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProvidersAvgOrderByAggregateInput = exports.ProvidersAvgOrderByAggregateInput = class ProvidersAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersAvgOrderByAggregateInput.prototype, "id", void 0);
exports.ProvidersAvgOrderByAggregateInput = ProvidersAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersAvgOrderByAggregateInput", {})
], ProvidersAvgOrderByAggregateInput);
