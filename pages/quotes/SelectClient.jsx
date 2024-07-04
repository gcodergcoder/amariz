import React, { useState, useEffect, useContext } from "react";
import { LIST_CLIENT } from "@/graphql/client/query";
import { useQuery } from "@apollo/client";
import { GlobalContext } from "../../context/useGlobalsContext"
import Arrow from "../../utlis/Icons/Arrow";

const Select = ({defaulProvider}) => {
    const { seQouteIdAgtSel, qouteIdClientSel, setQouteIdClientSel } = useContext(GlobalContext);
    const [openClient, setOpenClient] = useState(false);
    const [clientSelected, setClientSelected] = useState(undefined);
    const [dataClient, setDataClient] = useState([]);
    const [dataAgent, setDataAgent] = useState([]);
    const [selectOptions, setSelectOptions] = useState([]);
    const { data } = useQuery(LIST_CLIENT);

    console.log('openClient :', openClient);

    const searchProvider = (e) => {
        e.preventDefault();
        const target = e.target.value;
        const pvd = data?.findManyProviders?.filter((client) =>
            client?.name?.toLowerCase().includes(target?.toLowerCase())
        );
        setDataClient(pvd);
    };
    useEffect(() => {
        if (dataAgent) {
            const select = [{ id: "xxxxx", name: "Selecciona", surName: "" }];
            const value = select.concat(dataAgent[0]?.agentProvider);
            setSelectOptions(value);
        }
    }, [dataAgent]);

    useEffect(() => {
        if (qouteIdClientSel) {
            const client = dataClient?.filter(
                (client) => client?.id === qouteIdClientSel
            );
            setDataAgent(client);
            setOpenClient(false);
            seQouteIdAgtSel("")
        }
    }, [qouteIdClientSel]);

    useEffect(() => {
        if (data) {
            setDataClient(data?.findManyProviders);
        }
    }, [data]);

    return (
        <div className="flex mx-2 w-full">
            <div className="relative flex w-full">
                <button
                    onClick={() => {
                        setOpenClient(!openClient);
                    }}
                    className="flex items-center px-4 text-sm font-bold text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-50"
                    type="button"
                >
                    <div className="flex justify-between content-center items-center">
                        <div className="mr-2">
                            {clientSelected ? clientSelected : defaulProvider}
                        </div>
                        {Arrow("gray-100")}
                    </div>
                </button>
                {openClient ? (
                    <Provider
                        client={dataClient}
                        setQouteIdClientSel={setQouteIdClientSel}
                        searchProvider={searchProvider}
                        setClientSelected={setClientSelected}
                    />
                ) : (
                    <></>
                )}
                <select
                    onChange={(e) => {
                        seQouteIdAgtSel(
                            e.target.selectedOptions.item(0).getAttribute("id")
                        );
                    }}
                    className="border border-gray-300 font-thin text-gray-600 text-sm rounded-e-lg border-s-gray-100 border-s-2 focus:outline-0 block w-full p-1"
                >
                    {dataAgent.length === 0 ? (
                        <option></option>
                    ) : (
                        selectOptions.map((client) => {
                            if(client?.id != undefined){
                                return (
                                    <option id={client?.id} key={client?.id}>
                                        {client?.name + " " + client?.surName}
                                    </option>
                                );
                            }
                        })
                    )}
                </select>
            </div>
        </div>
    );
};

const Provider = ({
    client,
    setQouteIdClientSel,
    searchProvider,
    setClientSelected,
}) => {
    const parse = (client) => {
        setQouteIdClientSel(client.id);
        setClientSelected(client.name);
    };
    return (
        <div className="z-10 absolute top-12 -left-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <div className="overflow-y-auto">
                <div className="p-2">
                    <input
                        type="text"
                        className="h-9 rounded bg-gray-100 w-full focus:outline-0 px-4 text-gray-800 font-thin"
                        placeholder="Buscar..."
                        onChange={(e) => {
                            searchProvider(e);
                        }}
                    />
                </div>

                <ul className="py-2 text-sm text-gray-700">
                    {client?.map((client) => {
                        return (
                            <li key={client.id}>
                                <button
                                    onClick={() => {
                                        parse(client);
                                    }}
                                    type="button"
                                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    <div className="inline-flex items-center">
                                        {client.name}
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
