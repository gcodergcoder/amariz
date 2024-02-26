"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QoutesCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCountQoutesDetailsArgs_1 = require("./args/QoutesCountQoutesDetailsArgs");
let QoutesCount = exports.QoutesCount = class QoutesCount {
    getQoutesDetails(root, args) {
        return root.qoutesDetails;
    }
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "qoutesDetails",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [QoutesCount, QoutesCountQoutesDetailsArgs_1.QoutesCountQoutesDetailsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], QoutesCount.prototype, "getQoutesDetails", null);
exports.QoutesCount = QoutesCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("QoutesCount", {})
], QoutesCount);
