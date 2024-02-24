"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderWhereInput_1 = require("../inputs/AgentProviderWhereInput");
let AgentProviderListRelationFilter = exports.AgentProviderListRelationFilter = class AgentProviderListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], AgentProviderListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], AgentProviderListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgentProviderWhereInput_1.AgentProviderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgentProviderWhereInput_1.AgentProviderWhereInput)
], AgentProviderListRelationFilter.prototype, "none", void 0);
exports.AgentProviderListRelationFilter = AgentProviderListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AgentProviderListRelationFilter", {})
], AgentProviderListRelationFilter);
