"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentProviderScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AgentProviderScalarFieldEnum;
(function (AgentProviderScalarFieldEnum) {
    AgentProviderScalarFieldEnum["id"] = "id";
    AgentProviderScalarFieldEnum["createdAt"] = "createdAt";
    AgentProviderScalarFieldEnum["updatedAt"] = "updatedAt";
    AgentProviderScalarFieldEnum["name"] = "name";
    AgentProviderScalarFieldEnum["surName"] = "surName";
    AgentProviderScalarFieldEnum["email"] = "email";
    AgentProviderScalarFieldEnum["phone"] = "phone";
    AgentProviderScalarFieldEnum["providerId"] = "providerId";
})(AgentProviderScalarFieldEnum || (exports.AgentProviderScalarFieldEnum = AgentProviderScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AgentProviderScalarFieldEnum, {
    name: "AgentProviderScalarFieldEnum",
    description: undefined,
});
