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
    AgentProvider: crudResolvers.AgentProviderCrudResolver,
    Qoutes: crudResolvers.QoutesCrudResolver,
    QoutesDetails: crudResolvers.QoutesDetailsCrudResolver
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
    },
    Qoutes: {
        aggregateQoutes: actionResolvers.AggregateQoutesResolver,
        createManyQoutes: actionResolvers.CreateManyQoutesResolver,
        createOneQoutes: actionResolvers.CreateOneQoutesResolver,
        deleteManyQoutes: actionResolvers.DeleteManyQoutesResolver,
        deleteOneQoutes: actionResolvers.DeleteOneQoutesResolver,
        findFirstQoutes: actionResolvers.FindFirstQoutesResolver,
        findFirstQoutesOrThrow: actionResolvers.FindFirstQoutesOrThrowResolver,
        findManyQoutes: actionResolvers.FindManyQoutesResolver,
        findUniqueQoutes: actionResolvers.FindUniqueQoutesResolver,
        findUniqueQoutesOrThrow: actionResolvers.FindUniqueQoutesOrThrowResolver,
        groupByQoutes: actionResolvers.GroupByQoutesResolver,
        updateManyQoutes: actionResolvers.UpdateManyQoutesResolver,
        updateOneQoutes: actionResolvers.UpdateOneQoutesResolver,
        upsertOneQoutes: actionResolvers.UpsertOneQoutesResolver
    },
    QoutesDetails: {
        aggregateQoutesDetails: actionResolvers.AggregateQoutesDetailsResolver,
        createManyQoutesDetails: actionResolvers.CreateManyQoutesDetailsResolver,
        createOneQoutesDetails: actionResolvers.CreateOneQoutesDetailsResolver,
        deleteManyQoutesDetails: actionResolvers.DeleteManyQoutesDetailsResolver,
        deleteOneQoutesDetails: actionResolvers.DeleteOneQoutesDetailsResolver,
        findFirstQoutesDetails: actionResolvers.FindFirstQoutesDetailsResolver,
        findFirstQoutesDetailsOrThrow: actionResolvers.FindFirstQoutesDetailsOrThrowResolver,
        findManyQoutesDetails: actionResolvers.FindManyQoutesDetailsResolver,
        findUniqueQoutesDetails: actionResolvers.FindUniqueQoutesDetailsResolver,
        findUniqueQoutesDetailsOrThrow: actionResolvers.FindUniqueQoutesDetailsOrThrowResolver,
        groupByQoutesDetails: actionResolvers.GroupByQoutesDetailsResolver,
        updateManyQoutesDetails: actionResolvers.UpdateManyQoutesDetailsResolver,
        updateOneQoutesDetails: actionResolvers.UpdateOneQoutesDetailsResolver,
        upsertOneQoutesDetails: actionResolvers.UpsertOneQoutesDetailsResolver
    }
};
const crudResolversInfo = {
    Providers: ["aggregateProviders", "createManyProviders", "createOneProviders", "deleteManyProviders", "deleteOneProviders", "findFirstProviders", "findFirstProvidersOrThrow", "findManyProviders", "findUniqueProviders", "findUniqueProvidersOrThrow", "groupByProviders", "updateManyProviders", "updateOneProviders", "upsertOneProviders"],
    AgentProvider: ["aggregateAgentProvider", "createManyAgentProvider", "createOneAgentProvider", "deleteManyAgentProvider", "deleteOneAgentProvider", "findFirstAgentProvider", "findFirstAgentProviderOrThrow", "agentProviders", "agentProvider", "getAgentProvider", "groupByAgentProvider", "updateManyAgentProvider", "updateOneAgentProvider", "upsertOneAgentProvider"],
    Qoutes: ["aggregateQoutes", "createManyQoutes", "createOneQoutes", "deleteManyQoutes", "deleteOneQoutes", "findFirstQoutes", "findFirstQoutesOrThrow", "findManyQoutes", "findUniqueQoutes", "findUniqueQoutesOrThrow", "groupByQoutes", "updateManyQoutes", "updateOneQoutes", "upsertOneQoutes"],
    QoutesDetails: ["aggregateQoutesDetails", "createManyQoutesDetails", "createOneQoutesDetails", "deleteManyQoutesDetails", "deleteOneQoutesDetails", "findFirstQoutesDetails", "findFirstQoutesDetailsOrThrow", "findManyQoutesDetails", "findUniqueQoutesDetails", "findUniqueQoutesDetailsOrThrow", "groupByQoutesDetails", "updateManyQoutesDetails", "updateOneQoutesDetails", "upsertOneQoutesDetails"]
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
    UpsertOneAgentProviderArgs: ["where", "create", "update"],
    AggregateQoutesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyQoutesArgs: ["data", "skipDuplicates"],
    CreateOneQoutesArgs: ["data"],
    DeleteManyQoutesArgs: ["where"],
    DeleteOneQoutesArgs: ["where"],
    FindFirstQoutesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstQoutesOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyQoutesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueQoutesArgs: ["where"],
    FindUniqueQoutesOrThrowArgs: ["where"],
    GroupByQoutesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyQoutesArgs: ["data", "where"],
    UpdateOneQoutesArgs: ["data", "where"],
    UpsertOneQoutesArgs: ["where", "create", "update"],
    AggregateQoutesDetailsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyQoutesDetailsArgs: ["data", "skipDuplicates"],
    CreateOneQoutesDetailsArgs: ["data"],
    DeleteManyQoutesDetailsArgs: ["where"],
    DeleteOneQoutesDetailsArgs: ["where"],
    FindFirstQoutesDetailsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstQoutesDetailsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyQoutesDetailsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueQoutesDetailsArgs: ["where"],
    FindUniqueQoutesDetailsOrThrowArgs: ["where"],
    GroupByQoutesDetailsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyQoutesDetailsArgs: ["data", "where"],
    UpdateOneQoutesDetailsArgs: ["data", "where"],
    UpsertOneQoutesDetailsArgs: ["where", "create", "update"]
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
    AgentProvider: relationResolvers.AgentProviderRelationsResolver,
    Qoutes: relationResolvers.QoutesRelationsResolver,
    QoutesDetails: relationResolvers.QoutesDetailsRelationsResolver
};
const relationResolversInfo = {
    Providers: ["agentProvider", "quotes"],
    AgentProvider: ["provider", "qoutes"],
    Qoutes: ["provider", "agentProvider", "qoutesDetails"],
    QoutesDetails: ["qoutes"]
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
    Providers: ["id", "createdAt", "updatedAt", "name", "nit", "address"],
    AgentProvider: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    Qoutes: ["id", "createdAt", "updatedAt", "providerId", "agentProviderId"],
    QoutesDetails: ["id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId"]
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
    AggregateProviders: ["_count", "_min", "_max"],
    ProvidersGroupBy: ["id", "createdAt", "updatedAt", "name", "nit", "address", "_count", "_min", "_max"],
    AggregateAgentProvider: ["_count", "_min", "_max"],
    AgentProviderGroupBy: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId", "_count", "_min", "_max"],
    AggregateQoutes: ["_count", "_min", "_max"],
    QoutesGroupBy: ["id", "createdAt", "updatedAt", "providerId", "agentProviderId", "_count", "_min", "_max"],
    AggregateQoutesDetails: ["_count", "_avg", "_sum", "_min", "_max"],
    QoutesDetailsGroupBy: ["id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    ProvidersCount: ["agentProvider", "quotes"],
    ProvidersCountAggregate: ["id", "createdAt", "updatedAt", "name", "nit", "address", "_all"],
    ProvidersMinAggregate: ["id", "createdAt", "updatedAt", "name", "nit", "address"],
    ProvidersMaxAggregate: ["id", "createdAt", "updatedAt", "name", "nit", "address"],
    AgentProviderCount: ["qoutes"],
    AgentProviderCountAggregate: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId", "_all"],
    AgentProviderMinAggregate: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    AgentProviderMaxAggregate: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    QoutesCount: ["qoutesDetails"],
    QoutesCountAggregate: ["id", "createdAt", "updatedAt", "providerId", "agentProviderId", "_all"],
    QoutesMinAggregate: ["id", "createdAt", "updatedAt", "providerId", "agentProviderId"],
    QoutesMaxAggregate: ["id", "createdAt", "updatedAt", "providerId", "agentProviderId"],
    QoutesDetailsCountAggregate: ["id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId", "_all"],
    QoutesDetailsAvgAggregate: ["unit", "price"],
    QoutesDetailsSumAggregate: ["unit", "price"],
    QoutesDetailsMinAggregate: ["id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId"],
    QoutesDetailsMaxAggregate: ["id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId"]
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
    ProvidersWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "nit", "address", "agentProvider", "quotes"],
    ProvidersOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "nit", "address", "agentProvider", "quotes"],
    ProvidersWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "name", "nit", "address", "agentProvider", "quotes"],
    ProvidersOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "nit", "address", "_count", "_max", "_min"],
    ProvidersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "nit", "address"],
    AgentProviderWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId", "provider", "qoutes"],
    AgentProviderOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId", "provider", "qoutes"],
    AgentProviderWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "createdAt", "updatedAt", "name", "surName", "phone", "providerId", "provider", "qoutes"],
    AgentProviderOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId", "_count", "_max", "_min"],
    AgentProviderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    QoutesWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "providerId", "agentProviderId", "provider", "agentProvider", "qoutesDetails"],
    QoutesOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "providerId", "agentProviderId", "provider", "agentProvider", "qoutesDetails"],
    QoutesWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "providerId", "agentProviderId", "provider", "agentProvider", "qoutesDetails"],
    QoutesOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "providerId", "agentProviderId", "_count", "_max", "_min"],
    QoutesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "providerId", "agentProviderId"],
    QoutesDetailsWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId", "qoutes"],
    QoutesDetailsOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId", "qoutes"],
    QoutesDetailsWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "description", "unit", "price", "quotesId", "qoutes"],
    QoutesDetailsOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId", "_count", "_avg", "_max", "_min", "_sum"],
    QoutesDetailsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId"],
    ProvidersCreateInput: ["id", "createdAt", "updatedAt", "name", "nit", "address", "agentProvider", "quotes"],
    ProvidersUpdateInput: ["id", "createdAt", "updatedAt", "name", "nit", "address", "agentProvider", "quotes"],
    ProvidersCreateManyInput: ["id", "createdAt", "updatedAt", "name", "nit", "address"],
    ProvidersUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name", "nit", "address"],
    AgentProviderCreateInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "provider", "qoutes"],
    AgentProviderUpdateInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "provider", "qoutes"],
    AgentProviderCreateManyInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    AgentProviderUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone"],
    QoutesCreateInput: ["id", "createdAt", "updatedAt", "provider", "agentProvider", "qoutesDetails"],
    QoutesUpdateInput: ["id", "createdAt", "updatedAt", "provider", "agentProvider", "qoutesDetails"],
    QoutesCreateManyInput: ["id", "createdAt", "updatedAt", "providerId", "agentProviderId"],
    QoutesUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
    QoutesDetailsCreateInput: ["id", "createdAt", "updatedAt", "description", "unit", "price", "qoutes"],
    QoutesDetailsUpdateInput: ["id", "createdAt", "updatedAt", "description", "unit", "price", "qoutes"],
    QoutesDetailsCreateManyInput: ["id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId"],
    QoutesDetailsUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "description", "unit", "price"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AgentProviderListRelationFilter: ["every", "some", "none"],
    QoutesListRelationFilter: ["every", "some", "none"],
    AgentProviderOrderByRelationAggregateInput: ["_count"],
    QoutesOrderByRelationAggregateInput: ["_count"],
    ProvidersCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "nit", "address"],
    ProvidersMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "nit", "address"],
    ProvidersMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "nit", "address"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    ProvidersRelationFilter: ["is", "isNot"],
    AgentProviderCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    AgentProviderMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    AgentProviderMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    AgentProviderRelationFilter: ["is", "isNot"],
    QoutesDetailsListRelationFilter: ["every", "some", "none"],
    QoutesDetailsOrderByRelationAggregateInput: ["_count"],
    QoutesCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "providerId", "agentProviderId"],
    QoutesMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "providerId", "agentProviderId"],
    QoutesMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "providerId", "agentProviderId"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    QoutesRelationFilter: ["is", "isNot"],
    QoutesDetailsCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId"],
    QoutesDetailsAvgOrderByAggregateInput: ["unit", "price"],
    QoutesDetailsMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId"],
    QoutesDetailsMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId"],
    QoutesDetailsSumOrderByAggregateInput: ["unit", "price"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    AgentProviderCreateNestedManyWithoutProviderInput: ["create", "connectOrCreate", "createMany", "connect"],
    QoutesCreateNestedManyWithoutProviderInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    AgentProviderUpdateManyWithoutProviderNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    QoutesUpdateManyWithoutProviderNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProvidersCreateNestedOneWithoutAgentProviderInput: ["create", "connectOrCreate", "connect"],
    QoutesCreateNestedManyWithoutAgentProviderInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProvidersUpdateOneRequiredWithoutAgentProviderNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    QoutesUpdateManyWithoutAgentProviderNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProvidersCreateNestedOneWithoutQuotesInput: ["create", "connectOrCreate", "connect"],
    AgentProviderCreateNestedOneWithoutQoutesInput: ["create", "connectOrCreate", "connect"],
    QoutesDetailsCreateNestedManyWithoutQoutesInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProvidersUpdateOneRequiredWithoutQuotesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AgentProviderUpdateOneRequiredWithoutQoutesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    QoutesDetailsUpdateManyWithoutQoutesNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    QoutesCreateNestedOneWithoutQoutesDetailsInput: ["create", "connectOrCreate", "connect"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    QoutesUpdateOneRequiredWithoutQoutesDetailsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    AgentProviderCreateWithoutProviderInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "qoutes"],
    AgentProviderCreateOrConnectWithoutProviderInput: ["where", "create"],
    AgentProviderCreateManyProviderInputEnvelope: ["data", "skipDuplicates"],
    QoutesCreateWithoutProviderInput: ["id", "createdAt", "updatedAt", "agentProvider", "qoutesDetails"],
    QoutesCreateOrConnectWithoutProviderInput: ["where", "create"],
    QoutesCreateManyProviderInputEnvelope: ["data", "skipDuplicates"],
    AgentProviderUpsertWithWhereUniqueWithoutProviderInput: ["where", "update", "create"],
    AgentProviderUpdateWithWhereUniqueWithoutProviderInput: ["where", "data"],
    AgentProviderUpdateManyWithWhereWithoutProviderInput: ["where", "data"],
    AgentProviderScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "providerId"],
    QoutesUpsertWithWhereUniqueWithoutProviderInput: ["where", "update", "create"],
    QoutesUpdateWithWhereUniqueWithoutProviderInput: ["where", "data"],
    QoutesUpdateManyWithWhereWithoutProviderInput: ["where", "data"],
    QoutesScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "providerId", "agentProviderId"],
    ProvidersCreateWithoutAgentProviderInput: ["id", "createdAt", "updatedAt", "name", "nit", "address", "quotes"],
    ProvidersCreateOrConnectWithoutAgentProviderInput: ["where", "create"],
    QoutesCreateWithoutAgentProviderInput: ["id", "createdAt", "updatedAt", "provider", "qoutesDetails"],
    QoutesCreateOrConnectWithoutAgentProviderInput: ["where", "create"],
    QoutesCreateManyAgentProviderInputEnvelope: ["data", "skipDuplicates"],
    ProvidersUpsertWithoutAgentProviderInput: ["update", "create", "where"],
    ProvidersUpdateToOneWithWhereWithoutAgentProviderInput: ["where", "data"],
    ProvidersUpdateWithoutAgentProviderInput: ["id", "createdAt", "updatedAt", "name", "nit", "address", "quotes"],
    QoutesUpsertWithWhereUniqueWithoutAgentProviderInput: ["where", "update", "create"],
    QoutesUpdateWithWhereUniqueWithoutAgentProviderInput: ["where", "data"],
    QoutesUpdateManyWithWhereWithoutAgentProviderInput: ["where", "data"],
    ProvidersCreateWithoutQuotesInput: ["id", "createdAt", "updatedAt", "name", "nit", "address", "agentProvider"],
    ProvidersCreateOrConnectWithoutQuotesInput: ["where", "create"],
    AgentProviderCreateWithoutQoutesInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "provider"],
    AgentProviderCreateOrConnectWithoutQoutesInput: ["where", "create"],
    QoutesDetailsCreateWithoutQoutesInput: ["id", "createdAt", "updatedAt", "description", "unit", "price"],
    QoutesDetailsCreateOrConnectWithoutQoutesInput: ["where", "create"],
    QoutesDetailsCreateManyQoutesInputEnvelope: ["data", "skipDuplicates"],
    ProvidersUpsertWithoutQuotesInput: ["update", "create", "where"],
    ProvidersUpdateToOneWithWhereWithoutQuotesInput: ["where", "data"],
    ProvidersUpdateWithoutQuotesInput: ["id", "createdAt", "updatedAt", "name", "nit", "address", "agentProvider"],
    AgentProviderUpsertWithoutQoutesInput: ["update", "create", "where"],
    AgentProviderUpdateToOneWithWhereWithoutQoutesInput: ["where", "data"],
    AgentProviderUpdateWithoutQoutesInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "provider"],
    QoutesDetailsUpsertWithWhereUniqueWithoutQoutesInput: ["where", "update", "create"],
    QoutesDetailsUpdateWithWhereUniqueWithoutQoutesInput: ["where", "data"],
    QoutesDetailsUpdateManyWithWhereWithoutQoutesInput: ["where", "data"],
    QoutesDetailsScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "description", "unit", "price", "quotesId"],
    QoutesCreateWithoutQoutesDetailsInput: ["id", "createdAt", "updatedAt", "provider", "agentProvider"],
    QoutesCreateOrConnectWithoutQoutesDetailsInput: ["where", "create"],
    QoutesUpsertWithoutQoutesDetailsInput: ["update", "create", "where"],
    QoutesUpdateToOneWithWhereWithoutQoutesDetailsInput: ["where", "data"],
    QoutesUpdateWithoutQoutesDetailsInput: ["id", "createdAt", "updatedAt", "provider", "agentProvider"],
    AgentProviderCreateManyProviderInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone"],
    QoutesCreateManyProviderInput: ["id", "createdAt", "updatedAt", "agentProviderId"],
    AgentProviderUpdateWithoutProviderInput: ["id", "createdAt", "updatedAt", "name", "surName", "email", "phone", "qoutes"],
    QoutesUpdateWithoutProviderInput: ["id", "createdAt", "updatedAt", "agentProvider", "qoutesDetails"],
    QoutesCreateManyAgentProviderInput: ["id", "createdAt", "updatedAt", "providerId"],
    QoutesUpdateWithoutAgentProviderInput: ["id", "createdAt", "updatedAt", "provider", "qoutesDetails"],
    QoutesDetailsCreateManyQoutesInput: ["id", "createdAt", "updatedAt", "description", "unit", "price"],
    QoutesDetailsUpdateWithoutQoutesInput: ["id", "createdAt", "updatedAt", "description", "unit", "price"]
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
