"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyQoutesDetailsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QoutesDetailsCreateManyInput_1 = require("../../../inputs/QoutesDetailsCreateManyInput");
let CreateManyQoutesDetailsArgs = exports.CreateManyQoutesDetailsArgs = class CreateManyQoutesDetailsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QoutesDetailsCreateManyInput_1.QoutesDetailsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyQoutesDetailsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyQoutesDetailsArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyQoutesDetailsArgs = CreateManyQoutesDetailsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyQoutesDetailsArgs);
