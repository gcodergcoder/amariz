import React, { useState, useEffect } from "react";
import { LIST_PROVIDER } from "@/graphql/client/query";
import { useQuery } from "@apollo/client";

const Select = () => {
    const [openProvider, setOpenProvider] = useState(false);
    const [providerSelectedId, setProviderSelectedId] = useState("");
    const [providerSelected, setProviderSelected] = useState(undefined);
    const [dataProvider, setDataProvider] = useState([]);
    const [dataAgent, setDataAgent] = useState([]);
    const { data } = useQuery(LIST_PROVIDER);

    const searchProvider = (e) =>{
        e.preventDefault();
        const target = e.target.value
        const pvd = data?.findManyProviders?.filter((provider)=>provider?.name?.toLowerCase().includes(target?.toLowerCase()))
        setDataProvider(pvd)
    }

    useEffect(() => {
        if(providerSelectedId){
        const agent = dataProvider?.filter((agent) => agent?.id === providerSelectedId);
        setDataAgent(agent)
        setOpenProvider(!openProvider)
        }
        ;
    }, [providerSelectedId]);

    useEffect(() => {
        if (data) {
            setDataProvider(data?.findManyProviders);
        }
    }, [data]);

    return (
        <div className="flex p-1">
            <div className="relative flex">
                <button
                    onClick={() => {
                        setOpenProvider(!openProvider);
                    }}
                    className="flex items-center py-2 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-50"
                    type="button"
                >
                    {providerSelected ? providerSelected : "Seleccione"}
                </button>
                {openProvider ? (
                    <Provider
                        provider={dataProvider}
                        setProviderSelectedId={setProviderSelectedId}
                        searchProvider={searchProvider}
                        setProviderSelected={setProviderSelected}
                    />
                ) : (
                    <></>
                )}

                <label className="sr-only">Choose a state</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 border-s-2 focus:outline-0 block w-full p-2.5">
                    {dataAgent[0]?.agentProvider?.map((agent)=>{
                        return <option key={agent.id} selected>{agent.name + " " + agent.surName}</option>
                    })}
                </select>
            </div>
        </div>
    );
};

const Provider = ({
    provider,
    setProviderSelectedId,
    searchProvider,
    setProviderSelected
}) => {
    const parse = (provider) => {
        setProviderSelectedId(provider.id);
        setProviderSelected(provider.name)

    }
    return (
        <div className="z-10 absolute top-12 -left-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <div className="overflow-y-auto">
                <div className="p-2">
                    <input
                        type="text"
                        className="h-9 rounded bg-gray-100 w-full focus:outline-0 px-2 text-gray-800 font-thin"
                        placeholder="Buscar..."
                        onChange={(e) => {
                            searchProvider(e);
                        }}
                    />
                </div>

                <ul className="py-2 text-sm text-gray-700">
                    {provider?.map((provider) => {
                        return (
                            <li key={provider.id}>
                                <button
                                    onClick={() => {
                                        parse(provider)
                                    }}
                                    type="button"
                                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    <div className="inline-flex items-center">
                                        {provider.name}
                                    </div>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Select;
