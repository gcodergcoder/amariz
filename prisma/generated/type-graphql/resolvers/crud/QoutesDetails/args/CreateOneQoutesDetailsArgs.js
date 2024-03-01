"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneQoutesDetailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsCreateInput_1 = require("../../../inputs/QoutesDetailsCreateInput");
let CreateOneQoutesDetailsArgs = exports.CreateOneQoutesDetailsArgs = class CreateOneQoutesDetailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QoutesDetailsCreateInput_1.QoutesDetailsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QoutesDetailsCreateInput_1.QoutesDetailsCreateInput)
], CreateOneQoutesDetailsArgs.prototype, "data", void 0);
exports.CreateOneQoutesDetailsArgs = CreateOneQoutesDetailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneQoutesDetailsArgs);
