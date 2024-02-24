"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AgentProviderAvgOrderByAggregateInput = exports.AgentProviderAvgOrderByAggregateInput = class AgentProviderAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgentProviderAvgOrderByAggregateInput.prototype, "providerId", void 0);
exports.AgentProviderAvgOrderByAggregateInput = AgentProviderAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderAvgOrderByAggregateInput", {})
], AgentProviderAvgOrderByAggregateInput);
