"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderWhereInput_1 = require("../inputs/AgentProviderWhereInput");
let AgentProviderRelationFilter = exports.AgentProviderRelationFilter = class AgentProviderRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], AgentProviderRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], AgentProviderRelationFilter.prototype, "isNot", void 0);
exports.AgentProviderRelationFilter = AgentProviderRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderRelationFilter", {})
], AgentProviderRelationFilter);
