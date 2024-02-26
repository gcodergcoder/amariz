"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCountAgentProviderArgs_1 = require("./args/ProvidersCountAgentProviderArgs");
const ProvidersCountQuotesArgs_1 = require("./args/ProvidersCountQuotesArgs");
let ProvidersCount = exports.ProvidersCount = class ProvidersCount {
    getAgentProvider(root, args) {
        return root.agentProvider;
    }
    getQuotes(root, args) {
        return root.quotes;
    }
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "agentProvider",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ProvidersCount, ProvidersCountAgentProviderArgs_1.ProvidersCountAgentProviderArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ProvidersCount.prototype, "getAgentProvider", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "quotes",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ProvidersCount, ProvidersCountQuotesArgs_1.ProvidersCountQuotesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ProvidersCount.prototype, "getQuotes", null);
exports.ProvidersCount = ProvidersCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProvidersCount", {})
], ProvidersCount);
