import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { point, addUser, edit_icons, arrow } from "../../utlis/icons";
import { useQuery } from "@apollo/client";
import { LIST_PROVIDER } from "@/graphql/providers/query";
import Provider from "./providers";

const NoSSR = dynamic(() => import("./Modal"), { ssr: false });
const TableReact = () => {
    const { data, loading, error, refetch } = useQuery(LIST_PROVIDER);
    const [dataProvider, setDataProvider] = useState(undefined);
    const [datailProvider, setDetailProvider] = useState(null);
    const [modalPvd, setModalPvd] = useState(false);

    useEffect(() => {
        if (data) {
            setDataProvider(data?.findManyProviders);
        }
    }, [data]);

    return (
        <>
            {modalPvd ? <Provider setModalPvd={setModalPvd} refetch={refetch} detail={datailProvider} cleanData={setDetailProvider}  /> : <></>}
            <div className="bg-white flex flex-col items-center justify-center py-10 ">
                <div className="w-full max-w-4xl px-2">
                    <h1 className="text-2xl font-medium mb-4">CLIENTES</h1>
                    <div className="flex justify-between h-10">
                        <input
                            type="text"
                            className="h-full rounded bg-gray-100 w-96 px-10"
                            placeholder="Buscar..."
                        />
                        <button onClick={()=>{setModalPvd(!modalPvd)}} className="px-4 bg-amariz_6 text-white h-full rounded">
                            Nuevo
                        </button>
                    </div>
                    <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none mt-2">
                            <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-0 borer ">
                                <thead className="bg-amariz_3 text-base text-white font-semibold w-full">
                                    <tr>
                                        <th className="py-3 px-3 sm:text-base font-bold whitespace-nowrap"></th>
                                        <th className="py-3 px-3 sm:text-base font-bold whitespace-nowrap">
                                            Provedor
                                        </th>
                                        <th className="py-3 px-3 sm:text-base font-bold whitespace-nowrap">
                                            NIT
                                        </th>
                                        <th className="py-3 px-3 sm:text-base font-bold whitespace-nowrap">
                                            Dirección
                                        </th>
                                        <th className="py-3 px-3 sm:text-base font-bold whitespace-nowrap"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataProvider?.map((provider) => (
                                        <ProviderRows
                                            provider={provider}
                                            key={provider?.id}
                                            setDetailProvider={setDetailProvider}
                                            setModalPvd={setModalPvd}
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
        </>
    );
};

const ProviderRows = ({ provider, setDetailProvider, setModalPvd }) => {
    const [open, setOpen] = useState(false);

    const editProvider = () =>{
        setDetailProvider(provider)
        setModalPvd(true)
}

    return (
        <>
            <tr
                className={`cursor-pointer hover:bg-violet-100 ${
                    open ? "bg-violet-200 " : ""
                }`}
            >
                <td className={`py-2 px-2 text-base font-normal flex items-center justify-center h-full border-t`}>
                    <button type="button" onClick={() => setOpen(!open)}>
                        {arrow(open)}
                    </button>
                </td>
                <TdItemProvider item={provider?.name} />
                <TdItemProvider item={provider?.nit} />
                <TdItemProvider item={provider?.addredd} />
                <td
                    className={
                        "py-4 px-3 text-xxs font-normal flex items-center justify-center border-t"
                    }
                >
                    <button onClick={()=>{editProvider()}}>{edit_icons}</button>
                </td>
            </tr>

            <tr
                className={`w-full overflow-hidden transition-[max-height] delay-1000 duration-1000 ease-in-out  ${
                    open ? "max-h-20" : "max-h-0"
                }`}
            >
                <td className="px-4 bg-gray-50" colSpan={10}>
                    <table
                        className={`w-full border-x my-4 ${
                            open ? "" : "hidden"
                        }`}
                    >
                        <thead className="text-base text-white w-full border-b-2 bg-violet-100">
                        <tr>
                        <th className="py-3 pl-2 text-black text-xxs font-bold whitespace-nowrap">{"Nombres"}</th>
                        <th className="py-3 pl-2 text-black text-xxs font-bold whitespace-nowrap">{"Apellidos"}</th>
                        <th className="py-3 pl-2 text-black text-xxs font-bold whitespace-nowrap">{"Teléfono"}</th>
                        <th className="py-3 pl-2 text-black text-xxs font-bold whitespace-nowrap">{"Email"}</th>
                        <th className="py-2 pl-2 text-black text-xxs text-center font-bold whitespace-nowrap">
                            <button>{addUser}</button>
                        </th>
                        </tr>
                        </thead>
                        <tbody>
                            {provider.agentProvider?.map((agent) => (
                                <AgProvider agent={agent} key={agent?.id} />
                            ))}
                        </tbody>
                    </table>
                </td>
            </tr>
        </>
    );
};

const AgProvider = ({ agent }) => {
    return (
        <tr className="hover:bg-gray-50 border-b">
            <Td item={agent?.name} />
            <Td item={agent?.surName} />
            <Td item={agent?.phone} />
            <Td item={agent?.email} />
            <td className="px-1 text-center"></td>
        </tr>
    );
};

const Td = ({ item }) => {
    return <td className="px-2 text-xs">{item}</td>;
};

const TdItemProvider = ({ item }) => {
    return (
        <td
            className={`py-2 px-3 text-base font-normal border-t whitespace-nowrap`}
        >
            {item}
        </td>
    );
};

export default TableReact;
