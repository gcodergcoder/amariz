"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAgentProviderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgentProviderCreateManyInput_1 = require("../../../inputs/AgentProviderCreateManyInput");
let CreateManyAgentProviderArgs = exports.CreateManyAgentProviderArgs = class CreateManyAgentProviderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgentProviderCreateManyInput_1.AgentProviderCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAgentProviderArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAgentProviderArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAgentProviderArgs = CreateManyAgentProviderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAgentProviderArgs);
