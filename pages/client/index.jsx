import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Edit from "../../utlis/Icons/Edit";
import PlusPeople from "../../utlis/Icons/PlusPeople";
import { useQuery } from "@apollo/client";
import { LIST_CLIENT } from "@/graphql/client/query";
import ClientAgentForm from "./ClientAgentForm";
import ClientForm from "./ClientForm";
import SideBar from "../../components/SideBar";
import HeaderImagen from "../../components/HeaderImagen";
import { ButtonIcon } from "../../components/ButtonIcon";

const TableReact = () => {
    const { data, error, refetch } = useQuery(LIST_CLIENT);
    const [dataClient, setDataClient] = useState([]);
    const [detailClient, setDetailClient] = useState({});
    const [detailAgtClient, setDetailAgtClient] = useState({});
    const [modalClient, setModalClient] = useState(false);
    const [modalAgtClient, setModalAgtClient] = useState(false);

    useEffect(() => {
        if (data) {
            setDataClient(data?.findManyProviders);
        }
    }, [data]);

    const searchProvider = (e) => {
        e.preventDefault();
        const target = e.target.value;
        const pvd = data?.findManyProviders?.filter((provider) =>
            provider?.name?.toLowerCase().includes(target?.toLowerCase())
        );
        setDataClient(pvd);
    };

    if (error) {
        return (
            <div className="flex justify-center h-screen">
                Ha ocurrido un error, contacta a g-coder Solutions
            </div>
        );
    }

    return (
        <>
            {modalClient ? (
                <ClientForm
                    setModal={setModalClient}
                    refetch={refetch}
                    detail={detailClient}
                    cleanData={setDetailClient}
                />
            ) : (
                <></>
            )}
            {modalAgtClient ? (
                <ClientAgentForm
                    setModal={setModalAgtClient}
                    refetch={refetch}
                    detail={detailAgtClient}
                    cleanData={setDetailAgtClient}
                />
            ) : (
                <></>
            )}
            <div className="flex p-2 text-sm">
                <SideBar />
                <div className="flex-col w-full justify-start md:w-10/12 md:px-4">
                    <HeaderImagen />
                    <div className="w-full px-2">
                        <h1 className="font-medium mb-4 text-center py-6 text-3xl">
                            Clientes
                        </h1>
                        <div className="flex justify-between h-10 w-full">
                            <input
                                type="text"
                                className="h-full rounded bg-gray-100 px-10 w-full mx-2 focus:outline-0"
                                placeholder="Buscar..."
                                onChange={(e) => {
                                    searchProvider(e);
                                }}
                            />
                            <button
                                onClick={() => {
                                    setModalClient(!modalClient);
                                }}
                                className="px-4 bg-amariz_6 text-white h-full rounded"
                            >
                                Nuevo
                            </button>
                        </div>
                        <div className="w-full overflow-x-scroll md:overflow-auto max-w-7xl 2xl:max-w-none mt-2">
                            <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-0 borer">
                                <thead className="bg-amariz_3 text-white w-full">
                                    <tr>
                                        <th className="py-3 px-3">Provedor</th>
                                        <th className="py-3 px-3">NIT</th>
                                        <th className="hidden md:flex py-3 px-3">
                                            Dirección
                                        </th>
                                        <th className="py-3 px-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataClient?.map((provider) => (
                                        <ProviderRows
                                            key={provider.id}
                                            provider={provider}
                                            setDetailClient={setDetailClient}
                                            setModalClient={setModalClient}
                                            modalClient={modalClient}
                                            setModalAgtClient={
                                                setModalAgtClient
                                            }
                                            setDetailAgtClient={
                                                setDetailAgtClient
                                            }
                                        />
                                    ))}
                                    <tr>
                                        <td
                                            colSpan={6}
                                            className="border-t"
                                        ></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ProviderRows = ({
    provider,
    setDetailClient,
    setModalClient,
    modalClient,
    setModalAgtClient,
    setDetailAgtClient,
}) => {
    const [open, setOpen] = useState(false);

    const editProvider = () => {
        setDetailClient(provider);
        setModalClient(true);
        setOpen(false);
    };

    const newAgtProvider = () => {
        setDetailAgtClient({});
        setDetailAgtClient({ idProvider: provider?.id });
        setModalAgtClient(true);
    };

    useEffect(() => {
        setOpen(false);
    }, [modalClient]);

    return (
        <>
            <tr
                onClick={() => setOpen(!open)}
                className={`hover:bg-violet-100 rounded-lg solid font-thin ${
                    open ? "bg-violet-200 " : "rounded-lg"
                }`}
            >
                <td className="p-3 border-t">{provider?.name}</td>
                <td className="p-3 border-t">{provider?.nit}</td>
                <td className="hidden md:flex p-3 border-t">
                    {provider?.address}
                </td>
                <td className={"p-3 text-xxs font-normal border-t "}>
                    <div className="flex justify-end">
                        <ButtonIcon
                            Icon={Edit}
                            css="w-auto p-1"
                            onclick={editProvider}
                        />
                    </div>
                </td>
            </tr>

            <tr
                className={`w-full overflow-hidden transition-[max-height] delay-1000 text-[15px] duration-1000 ease-in-out  ${
                    open ? "max-h-20" : "max-h-0"
                }`}
            >
                <td className="px-4 bg-gray-50" colSpan={10}>
                    <table
                        className={`w-full border-x my-4 ${
                            open ? "" : "hidden"
                        }`}
                    >
                        <thead className="w-full border-b-2 bg-violet-100">
                            <tr className="text-black">
                                <th className="py-3 px-4 font-light">
                                    {"Nombre"}
                                </th>
                                <th className="py-3 px-4 font-light">
                                    {"Teléfono"}
                                </th>
                                <th className="py-3 px-4 font-light">
                                    {"Email"}
                                </th>
                                <th className="py-3 px-4 font-light text-right">
                                    <div className="flex justify-end">
                                        <ButtonIcon
                                            Icon={PlusPeople}
                                            css="w-auto p-1"
                                            onclick={newAgtProvider}
                                        />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {provider?.agentProvider?.map((agent) => (
                                <AgProvider
                                    agent={agent}
                                    key={agent?.id}
                                    setDetailAgtClient={setDetailAgtClient}
                                    setModalAgtClient={setModalAgtClient}
                                />
                            ))}
                        </tbody>
                    </table>
                </td>
            </tr>
        </>
    );
};

const AgProvider = ({ agent, setDetailAgtClient, setModalAgtClient }) => {
    const editAgtProvider = () => {
        setDetailAgtClient({});
        setDetailAgtClient(agent);
        setModalAgtClient(true);
    };
    return (
        <tr className="hover:bg-gray-100 border-b font-light text-gray-500">
            <td className="py-2 px-4 ">{agent?.name + " " + agent?.surName}</td>
            <td className="py-2 px-4 ">{agent?.phone}</td>
            <td className="py-2 px-4 ">{agent?.email}</td>
            <td className="py-2 pr-6 text-black text-xxs text-right">
                <div className="flex justify-end">
                    <ButtonIcon
                        Icon={Edit}
                        css="w-auto p-1"
                        onclick={editAgtProvider}
                    />
                </div>
            </td>
        </tr>
    );
};

ProviderRows.propTypes = {
    setModalClient: PropTypes.func,
    setDetailClient: PropTypes.func,
    setDetailAgtClient: PropTypes.func,
    setModalAgtClient: PropTypes.func,
    provider: PropTypes.object,
    modalClient: PropTypes.bool,
};

AgProvider.propTypes = {
    setDetailAgtClient: PropTypes.func,
    setModalAgtClient: PropTypes.func,
    agent: PropTypes.object,
};

export default TableReact;
