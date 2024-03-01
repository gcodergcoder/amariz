"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderCountQoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesWhereInput_1 = require("../../inputs/QoutesWhereInput");
let AgentProviderCountQoutesArgs = exports.AgentProviderCountQoutesArgs = class AgentProviderCountQoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesWhereInput_1.QoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QoutesWhereInput_1.QoutesWhereInput)
], AgentProviderCountQoutesArgs.prototype, "where", void 0);
exports.AgentProviderCountQoutesArgs = AgentProviderCountQoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AgentProviderCountQoutesArgs);
