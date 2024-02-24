import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { LIST_PROVIDER } from "@/graphql/providers/query";
import { edit_icons, plus_people, point, expand } from "../../utlis/icons.js";
import { Line } from "../../components/Line.jsx";
import AgentProvider from "./agent_provider.jsx";
import Provider from "./providers.jsx";
import { LoadingCenter } from "../../components/LoadingCenter.jsx";
import { ButtonGeneral } from "../../components/ButtonGeneral.jsx";

const ListProvider = () => {
    const { data, loading, error, refetch } = useQuery(LIST_PROVIDER);
    const [idItemsDetail, setIdItemsDetail] = useState(null);
    const [modalProvider, setModalProvider] = useState(false);

    if (loading) {
        return <LoadingCenter />;
    }
    if(error){
        return(
            <h6>Ha occurrido un error, contacte a Gus!</h6>
        )
    }

    return (
        <>
        {modalProvider ? (
            <Provider modalProvider={setModalProvider} refetch={refetch} />
        ) : (
            <></>
        )}
        <div className="flex flex-col mt-20 w-full md:w-9/12 lg:w-5/12">
            <h1 className="text-center font-extrabold text-2xl mb-10">Provedores</h1>
            <div className="flex mb-5">
            <input
                type="text"
                placeholder="Buscar..."
                className="border border-gray-100 bg-fuchsia-50 px-4 rounded-lg h-14 w-full focus:outline-0"
            />
            <ButtonGeneral name={"+"} setValue={setModalProvider} value={true} />
            </div>
            {data?.findManyProviders.map((item) => {
                return (
                    <div key={item.id}>
                        <div
                            onClick={() => setIdItemsDetail(item.id)}
                            className="border border-gray-100 mb-2 shadow-sm rounded-lg px-4 py-5"
                        >
                            <div className="flex justify-between text-xl">
                                <span>{item.name}</span>
                                <button>{expand}</button>
                            </div>
                        </div>
                        {item.id === idItemsDetail ? (
                            <DetailProvider detail={item} refetch={refetch} />
                        ) : (
                            <></>
                        )}
                    </div>
                );
            })}
        </div>
        </>
    );
};

const DetailProvider = ({ detail, refetch }) => {
    const [modalNewAgent, setModalNewAgent] = useState(false);
    const [modalEditAgent, setModalEditAgent] = useState(false);
    const [modalEditProvider, setModalEditProvider] = useState(false);
    const [dataEditAgent, setDataEditAgent] = useState(null);
    const [idNewAgent, setIdNewAgent] = useState(null);

    const newAgent = () => {
        setIdNewAgent(detail.id);
        setModalNewAgent(!modalNewAgent);
    };
    const editAgent = (data) => {
        setDataEditAgent(data);
        setModalEditAgent(true);
    };
    return (
        <>
            {modalEditProvider ? (
                <Provider modalProvider={setModalEditProvider} refetch={refetch} detail={detail} />
            ) : (
                <></>
            )}
            {modalEditAgent ? (
                <AgentProvider
                    id={detail?.id}
                    modalNewAgent={setModalEditAgent}
                    refetch={refetch}
                    detail={dataEditAgent}
                />
            ) : (
                <></>
            )}
            {modalNewAgent ? (
                <AgentProvider
                    id={idNewAgent}
                    modalNewAgent={setModalNewAgent}
                    refetch={refetch}
                />
            ) : (
                <></>
            )}
            <div className="p-2 font-light text-sm">
                <div className="flex-col justify-center bg-gray-50 pt-5 pb-2 rounded-lg">
                    <div className="flex justify-between w-full px-4 mb-6">
                        <ul className="list-none">
                            <li className="mx-2">
                                <span className="font-semibold">Cliente: </span>{" "}
                                {detail?.name}
                            </li>
                            <li className="mx-2">
                                <span className="font-semibold">Nit: </span>
                                {detail?.nit}
                            </li>
                            <li className="mx-2">
                                <span className="font-semibold">
                                    Dirección:
                                </span>
                                {detail?.addredd}
                            </li>
                        </ul>
                        <button onClick={()=>(setModalEditProvider(true))}>
                            {edit_icons}
                        </button>
                    </div>
                    <Line colorDivide="divide-gray-200" />
                    <div className="flex-col w-full justify-center bg-gray-50 py-3 rounded-lg px-4 my-2 ont-semibold">
                        {detail?.agentProvider.map((agente) => {
                            return (
                                <div key={agente.id}>
                                <div
                                    className="flex justify-between w-full"
                                >
                                    <div className="w-full">
                                        <ul className="flex-col list-none my-4">
                                            <li>
                                                <span className="font-medium">
                                                    Nombre:
                                                </span>
                                                {" " +
                                                    agente.name +
                                                    " " +
                                                    agente.surName}
                                            </li>
                                            <li>
                                                <span className="font-medium">
                                                    Teléfono:
                                                </span>
                                                {" " + agente.phone}
                                            </li>
                                            <li>
                                                <span className="font-medium">
                                                    Email:
                                                </span>
                                                {" " + agente.email}
                                            </li>
                                        </ul>
                                    </div>
                                    <button onClick={()=>{editAgent(agente)}}>{point}</button>
                                </div>
                                <Line colorDivide="divide-gray-200" />
                                </div>
                            );
                        })}
                        <button
                            className="flex justify-center w-full mt-7"
                            onClick={() => {
                                newAgent();
                            }}
                        >
                            {plus_people}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

DetailProvider.propTypes = {
    detail: PropTypes.object,
    refetch: PropTypes.func,
};

export default ListProvider;
