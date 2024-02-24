"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Providers: crudResolvers.ProvidersCrudResolver,
    AgentProvider: crudResolvers.AgentProviderCrudResolver
};
const actionResolversMap = {
    Providers: {
        aggregateProviders: actionResolvers.AggregateProvidersResolver,
        createManyProviders: actionResolvers.CreateManyProvidersResolver,
        createOneProviders: actionResolvers.CreateOneProvidersResolver,
        deleteManyProviders: actionResolvers.DeleteManyProvidersResolver,
        deleteOneProviders: actionResolvers.DeleteOneProvidersResolver,
        findFirstProviders: actionResolvers.FindFirstProvidersResolver,
        findFirstProvidersOrThrow: actionResolvers.FindFirstProvidersOrThrowResolver,
        findManyProviders: actionResolvers.FindManyProvidersResolver,
        findUniqueProviders: actionResolvers.FindUniqueProvidersResolver,
        findUniqueProvidersOrThrow: actionResolvers.FindUniqueProvidersOrThrowResolver,
        groupByProviders: actionResolvers.GroupByProvidersResolver,
        updateManyProviders: actionResolvers.UpdateManyProvidersResolver,
        updateOneProviders: actionResolvers.UpdateOneProvidersResolver,
        upsertOneProviders: actionResolvers.UpsertOneProvidersResolver
    },
    AgentProvider: {
        aggregateAgentProvider: actionResolvers.AggregateAgentProviderResolver,
        createManyAgentProvider: actionResolvers.CreateManyAgentProviderResolver,
        createOneAgentProvider: actionResolvers.CreateOneAgentProviderResolver,
        deleteManyAgentProvider: actionResolvers.DeleteManyAgentProviderResolver,
        deleteOneAgentProvider: actionResolvers.DeleteOneAgentProviderResolver,
        findFirstAgentProvider: actionResolvers.FindFirstAgentProviderResolver,
        findFirstAgentProviderOrThrow: actionResolvers.FindFirstAgentProviderOrThrowResolver,
        agentProviders: actionResolvers.FindManyAgentProviderResolver,
        agentProvider: actionResolvers.FindUniqueAgentProviderResolver,
        getAgentProvider: actionResolvers.FindUniqueAgentProviderOrThrowResolver,
        groupByAgentProvider: actionResolvers.GroupByAgentProviderResolver,
        updateManyAgentProvider: actionResolvers.UpdateManyAgentProviderResolver,
        updateOneAgentProvider: actionResolvers.UpdateOneAgentProviderResolver,
        upsertOneAgentProvider: actionResolvers.UpsertOneAgentProviderResolver
    }
};
const crudResolversInfo = {
    Providers: ["aggregateProviders", "createManyProviders", "createOneProviders", "deleteManyProviders", "deleteOneProviders", "findFirstProviders", "findFirstProvidersOrThrow", "findManyProviders", "findUniqueProviders", "findUniqueProvidersOrThrow", "groupByProviders", "updateManyProviders", "updateOneProviders", "upsertOneProviders"],
    AgentProvider: ["aggregateAgentProvider", "createManyAgentProvider", "createOneAgentProvider", "deleteManyAgentProvider", "deleteOneAgentProvider", "findFirstAgentProvider", "findFirstAgentProviderOrThrow", "agentProviders", "agentProvider", "getAgentProvider", "groupByAgentProvider", "updateManyAgentProvider", "updateOneAgentProvider", "upsertOneAgentProvider"]
};
const argsInfo = {
    AggregateProvidersArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyProvidersArgs: ["data", "skipDuplicates"],
    CreateOneProvidersArgs: ["data"],
    DeleteManyProvidersArgs: ["where"],
    DeleteOneProvidersArgs: ["where"],
    FindFirstProvidersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstProvidersOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProvidersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueProvidersArgs: ["where"],
    FindUniqueProvidersOrThrowArgs: ["where"],
    GroupByProvidersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyProvidersArgs: ["data", "where"],
    UpdateOneProvidersArgs: ["data", "where"],
    UpsertOneProvidersArgs: ["where", "create", "update"],
    AggregateAgentProviderArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAgentProviderArgs: ["data", "skipDuplicates"],
    CreateOneAgentProviderArgs: ["data"],
    DeleteManyAgentProviderArgs: ["where"],
    DeleteOneAgentProviderArgs: ["where"],
    FindFirstAgentProviderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAgentProviderOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAgentProviderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAgentProviderArgs: ["where"],
    FindUniqueAgentProviderOrThrowArgs: ["where"],
    GroupByAgentProviderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAgentProviderArgs: ["data", "where"],
    UpdateOneAgentProviderArgs: ["data", "where"],
    UpsertOneAgentProviderArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators !== null && allActionsDecorators !== void 0 ? allActionsDecorators : [],
                ...operationKindDecorators !== null && operationKindDecorators !== void 0 ? operationKindDecorators : [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Providers: relationResolvers.ProvidersRelationsResolver,
    AgentProvider: relationResolvers.AgentProviderRelationsResolver
};
const relationResolversInfo = {
    Providers: ["agentProvider"],
    AgentProvider: ["provider"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    var _a;
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = (_a = relationResolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Providers: ["id", "createdAt", "updatedAt", "name", "nit", "addredd"],
    AgentProvider: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateProviders: ["_count", "_avg", "_sum", "_min", "_max"],
    ProvidersGroupBy: ["id", "createdAt", "updatedAt", "name", "nit", "addredd", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateAgentProvider: ["_count", "_avg", "_sum", "_min", "_max"],
    AgentProviderGroupBy: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    ProvidersCount: ["agentProvider"],
    ProvidersCountAggregate: ["id", "createdAt", "updatedAt", "name", "nit", "addredd", "_all"],
    ProvidersAvgAggregate: ["id"],
    ProvidersSumAggregate: ["id"],
    ProvidersMinAggregate: ["id", "createdAt", "updatedAt", "name", "nit", "addredd"],
    ProvidersMaxAggregate: ["id", "createdAt", "updatedAt", "name", "nit", "addredd"],
    AgentProviderCountAggregate: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId", "_all"],
    AgentProviderAvgAggregate: ["id", "providerId"],
    AgentProviderSumAggregate: ["id", "providerId"],
    AgentProviderMinAggregate: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    AgentProviderMaxAggregate: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    ProvidersWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "nit", "addredd", "agentProvider"],
    ProvidersOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "nit", "addredd", "agentProvider"],
    ProvidersWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "name", "nit", "addredd", "agentProvider"],
    ProvidersOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "nit", "addredd", "_count", "_avg", "_max", "_min", "_sum"],
    ProvidersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "nit", "addredd"],
    AgentProviderWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId", "provider"],
    AgentProviderOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId", "provider"],
    AgentProviderWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "createdAt", "updatedAt", "name", "surName", "phone", "providerId", "provider"],
    AgentProviderOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId", "_count", "_avg", "_max", "_min", "_sum"],
    AgentProviderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    ProvidersCreateInput: ["createdAt", "updatedAt", "name", "nit", "addredd", "agentProvider"],
    ProvidersUpdateInput: ["createdAt", "updatedAt", "name", "nit", "addredd", "agentProvider"],
    ProvidersCreateManyInput: ["id", "createdAt", "updatedAt", "name", "nit", "addredd"],
    ProvidersUpdateManyMutationInput: ["createdAt", "updatedAt", "name", "nit", "addredd"],
    AgentProviderCreateInput: ["createdAt", "updatedAt", "name", "surName", "email", "phone", "provider"],
    AgentProviderUpdateInput: ["createdAt", "updatedAt", "name", "surName", "email", "phone", "provider"],
    AgentProviderCreateManyInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    AgentProviderUpdateManyMutationInput: ["createdAt", "updatedAt", "name", "surName", "email", "phone"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    AgentProviderListRelationFilter: ["every", "some", "none"],
    AgentProviderOrderByRelationAggregateInput: ["_count"],
    ProvidersCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "nit", "addredd"],
    ProvidersAvgOrderByAggregateInput: ["id"],
    ProvidersMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "nit", "addredd"],
    ProvidersMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "nit", "addredd"],
    ProvidersSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    ProvidersRelationFilter: ["is", "isNot"],
    AgentProviderCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    AgentProviderAvgOrderByAggregateInput: ["id", "providerId"],
    AgentProviderMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    AgentProviderMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    AgentProviderSumOrderByAggregateInput: ["id", "providerId"],
    AgentProviderCreateNestedManyWithoutProviderInput: ["create", "connectOrCreate", "createMany", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    StringFieldUpdateOperationsInput: ["set"],
    AgentProviderUpdateManyWithoutProviderNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    ProvidersCreateNestedOneWithoutAgentProviderInput: ["create", "connectOrCreate", "connect"],
    ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    AgentProviderCreateWithoutProviderInput: ["createdAt", "updatedAt", "name", "surName", "email", "phone"],
    AgentProviderCreateOrConnectWithoutProviderInput: ["where", "create"],
    AgentProviderCreateManyProviderInputEnvelope: ["data", "skipDuplicates"],
    AgentProviderUpsertWithWhereUniqueWithoutProviderInput: ["where", "update", "create"],
    AgentProviderUpdateWithWhereUniqueWithoutProviderInput: ["where", "data"],
    AgentProviderUpdateManyWithWhereWithoutProviderInput: ["where", "data"],
    AgentProviderScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    ProvidersCreateWithoutAgentProviderInput: ["createdAt", "updatedAt", "name", "nit", "addredd"],
    ProvidersCreateOrConnectWithoutAgentProviderInput: ["where", "create"],
    ProvidersUpsertWithoutAgentProviderInput: ["update", "create", "where"],
    ProvidersUpdateToOneWithWhereWithoutAgentProviderInput: ["where", "data"],
    ProvidersUpdateWithoutAgentProviderInput: ["createdAt", "updatedAt", "name", "nit", "addredd"],
    AgentProviderCreateManyProviderInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone"],
    AgentProviderUpdateWithoutProviderInput: ["createdAt", "updatedAt", "name", "surName", "email", "phone"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
