import React, { useState, useEffect, useContext } from "react";
import { LIST_PROVIDER } from "@/graphql/client/query";
import { useQuery } from "@apollo/client";
import { GlobalContext } from "../../context/useGlobalsContext"

const Select = ({defaulProvider}) => {
    const { seQouteIdAgtSel, qouteIdPvdSel, seQouteIdPvdSel } = useContext(GlobalContext);
    const [openProvider, setOpenProvider] = useState(false);
    const [providerSelected, setProviderSelected] = useState(undefined);
    const [dataProvider, setDataProvider] = useState([]);
    const [dataAgent, setDataAgent] = useState([]);
    const [selectOptions, setSelectOptions] = useState([]);
    const { data } = useQuery(LIST_PROVIDER);

    const searchProvider = (e) => {
        e.preventDefault();
        const target = e.target.value;
        const pvd = data?.findManyProviders?.filter((provider) =>
            provider?.name?.toLowerCase().includes(target?.toLowerCase())
        );
        setDataProvider(pvd);
    };
    useEffect(() => {
        if (dataAgent) {
            const select = [{ id: "dsafas", name: "Selecciona", surName: "" }];
            const value = select.concat(dataAgent[0]?.agentProvider);
            setSelectOptions(value);
        }
    }, [dataAgent]);

    useEffect(() => {
        if (qouteIdPvdSel) {
            const agent = dataProvider?.filter(
                (agent) => agent?.id === qouteIdPvdSel
            );
            setDataAgent(agent);
            setOpenProvider(!openProvider);
            seQouteIdAgtSel("")
        }
    }, [qouteIdPvdSel]);

    useEffect(() => {
        if (data) {
            setDataProvider(data?.findManyProviders);
        }
    }, [data]);

    return (
        <div className="flex mx-2">
            <div className="relative flex">
                <button
                    onClick={() => {
                        setOpenProvider(!openProvider);
                    }}
                    className="flex items-center px-4 text-sm font-bold text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-50"
                    type="button"
                >
                    {providerSelected ? providerSelected : defaulProvider}
                </button>
                {openProvider ? (
                    <Provider
                        provider={dataProvider}
                        seQouteIdPvdSel={seQouteIdPvdSel}
                        searchProvider={searchProvider}
                        setProviderSelected={setProviderSelected}
                    />
                ) : (
                    <></>
                )}
                {}
                <select
                onChange={(e)=>{seQouteIdAgtSel(e.target.selectedOptions.item(0).getAttribute("id"))}}
                    className="border border-gray-300 font-thin text-gray-600 text-sm rounded-e-lg border-s-gray-100 border-s-2 focus:outline-0 block w-full p-1"
                >
                    {dataAgent.length === 0 ? <option >
                                {""}
                            </option> :
                            selectOptions.map((agent) => {
                                return (
                                    <option id={agent?.id} key={agent?.id}>
                                        {agent?.name + " " + agent?.surName}
                                    </option>
                                );
                            })}
                </select>
            </div>
        </div>
    );
};

const Provider = ({
    provider,
    seQouteIdPvdSel,
    searchProvider,
    setProviderSelected,
}) => {
    const parse = (provider) => {
        seQouteIdPvdSel(provider.id);
        setProviderSelected(provider.name);
    };
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
                                        parse(provider);
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
