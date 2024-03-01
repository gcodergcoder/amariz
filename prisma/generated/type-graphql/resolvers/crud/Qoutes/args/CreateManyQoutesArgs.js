"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyQoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesCreateManyInput_1 = require("../../../inputs/QoutesCreateManyInput");
let CreateManyQoutesArgs = exports.CreateManyQoutesArgs = class CreateManyQoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesCreateManyInput_1.QoutesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyQoutesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyQoutesArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyQoutesArgs = CreateManyQoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyQoutesArgs);
