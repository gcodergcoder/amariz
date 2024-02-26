"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var QoutesScalarFieldEnum;
(function (QoutesScalarFieldEnum) {
    QoutesScalarFieldEnum["id"] = "id";
    QoutesScalarFieldEnum["createdAt"] = "createdAt";
    QoutesScalarFieldEnum["updatedAt"] = "updatedAt";
    QoutesScalarFieldEnum["providerId"] = "providerId";
    QoutesScalarFieldEnum["agentProviderId"] = "agentProviderId";
})(QoutesScalarFieldEnum || (exports.QoutesScalarFieldEnum = QoutesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(QoutesScalarFieldEnum, {
    name: "QoutesScalarFieldEnum",
    description: undefined,
});
