"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesDetailsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var QoutesDetailsScalarFieldEnum;
(function (QoutesDetailsScalarFieldEnum) {
    QoutesDetailsScalarFieldEnum["id"] = "id";
    QoutesDetailsScalarFieldEnum["createdAt"] = "createdAt";
    QoutesDetailsScalarFieldEnum["updatedAt"] = "updatedAt";
    QoutesDetailsScalarFieldEnum["description"] = "description";
    QoutesDetailsScalarFieldEnum["unit"] = "unit";
    QoutesDetailsScalarFieldEnum["price"] = "price";
    QoutesDetailsScalarFieldEnum["quotesId"] = "quotesId";
})(QoutesDetailsScalarFieldEnum || (exports.QoutesDetailsScalarFieldEnum = QoutesDetailsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(QoutesDetailsScalarFieldEnum, {
    name: "QoutesDetailsScalarFieldEnum",
    description: undefined,
});
