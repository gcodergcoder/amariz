"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCountQoutesArgs_1 = require("./args/AgentProviderCountQoutesArgs");
let AgentProviderCount = exports.AgentProviderCount = class AgentProviderCount {
    getQoutes(root, args) {
        return root.qoutes;
    }
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "qoutes",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AgentProviderCount, AgentProviderCountQoutesArgs_1.AgentProviderCountQoutesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], AgentProviderCount.prototype, "getQoutes", null);
exports.AgentProviderCount = AgentProviderCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AgentProviderCount", {})
], AgentProviderCount);
