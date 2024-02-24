"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProvidersScalarFieldEnum;
(function (ProvidersScalarFieldEnum) {
    ProvidersScalarFieldEnum["id"] = "id";
    ProvidersScalarFieldEnum["createdAt"] = "createdAt";
    ProvidersScalarFieldEnum["updatedAt"] = "updatedAt";
    ProvidersScalarFieldEnum["name"] = "name";
    ProvidersScalarFieldEnum["nit"] = "nit";
    ProvidersScalarFieldEnum["addredd"] = "addredd";
})(ProvidersScalarFieldEnum || (exports.ProvidersScalarFieldEnum = ProvidersScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProvidersScalarFieldEnum, {
    name: "ProvidersScalarFieldEnum",
    description: undefined,
});
