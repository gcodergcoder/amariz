import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import Link from "next/link";
import { QOUTES } from "@/graphql/qoutes/query";
import useParsePrice from "@/hooks/useParcePrice";
import SideBar from "../../components/SideBar";
import HeaderImagen from "../../components/HeaderImagen";
import  QuotesModal  from "./QuotesModal";

const css_th =
    "p-7 font-bold uppercase text-white hidden lg:table-cell border border-gray-300 lg:border-0";
const css_td =
    "w-full lg:w-auto text-gray-800 text-center block lg:table-cell relative lg:static  py-2";
const css_span =
    "lg:hidden absolute grid content-center top-[0px] left-0 bg-amariz_4 text-white border-[0.5px] border-white px-2 py-1 h-full w-28 text-xs font-bold uppercase";
const css_span_2 =
    "border-b-[0.3px] border-r-[0.3px] lg:border-0 grid content-center text-left lg:pl-0 lg:text-center pl-32 pr-2 py-2";
const css_tr =
    "bg-white lg:hover:bg-gray-100 text-sm flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0 lg:border-b";
const Index = () => {
    const { data, error, refetch } = useQuery(QOUTES);
    const [newQoute, setNewQoute] = useState(false);
    console.log("data....", data)

    return (
        <div className="flex p-2 text-sm text-gray-800">
            <SideBar />
            <div className="flex-col justify-start lg:w-10/12 lg:px-4">
                <HeaderImagen/>
                <div className="flex justify-between border border-gray-300 rounded-lg my-4 py-4">
                    <div className="flex justify-end content-end w-full">
                        <input
                            className="h-10 w-9/12 bg-gray-50 mx-1 rounded-lg focus:outline-0 font-light text-lg text-gray-500 border  px-5"
                            type="text"
                        />
                    </div>
                    <button className="w-2/12 mx-1  bg-gray-100 h-10  ">
                        boton2
                    </button>
                    <button onClick={()=>{setNewQoute(!newQoute)}} className="w-2/12 mx-1  bg-gray-100 h-10  ">
                        Nuevo
                    </button>
                </div>
                <div className="border border-gray-300 p-4 rounded-lg">
                    <h4 className="text-center p-4 text-2xl bg-amariz_4 text-white mb-3">
                        Cotizaciones
                    </h4>
                    <table className="border-collapse w-full">
                        <thead>
                            <tr>
                                <th className={`${css_th} bg-amariz_4`}>Id</th>
                                <th className={`${css_th} bg-amariz_4`}>
                                    Cliente
                                </th>
                                <th className={`${css_th} bg-amariz_4`}>
                                    Fecha creación
                                </th>
                                <th className={`${css_th} bg-amariz_4`}>
                                    Agente
                                </th>
                                <th className={`${css_th} bg-amariz_4`}>
                                    Total
                                </th>
                                <th className={`${css_th} bg-amariz_4`}></th>
                            </tr>
                        </thead>
                        {!newQoute ? <QuotesModal setModal={setNewQoute} cleanData={{}} /> : <><tbody>
                            
                            {data?.findManyQoutes?.map((ob) => {
                                return <TrBody key={ob?.id} data={ob} />
                            })}
                        </tbody></>}
                        
                    </table>
                    <div className="text-end">Hacer paginas</div>
                </div>
            </div>
        </div>
    );
};

const TrBody = ({ data }) => {
    const { parcePrice } = useParsePrice();
    const sumaDetail = () => {
        var subT = 0;
        data?.qoutesDetails?.map((k) => {
            subT = subT + k.price * k.unit;
        });
        return subT;
    };
    return (
        <tr className={css_tr}>
            <td className={`${css_td} lg:w-12/24`}>
                <span className={`${css_span} rounded-tl-xl`}>Id</span>
                <p className={`${css_span_2} border-t-[0.3px] `}>
                    {data?.id.slice(0, 5)}
                </p>
            </td>
            <td className={`${css_td} lg:w-2/24`}>
                <span className={css_span}>Cliente</span>
                <span className={css_span_2}>{data?.provider?.name}</span>
            </td>
            <td className={`${css_td} lg:w-5/24`}>
                <span className={css_span}>Fecha creación</span>
                <span className={css_span_2}>{data?.createdAt}</span>
            </td>
            <td className={`${css_td} lg:w-5/24`}>
                <span className={css_span}>Agente</span>
                <span className={css_span_2}>
                    {data?.agentProvider?.name +
                        " " +
                        data?.agentProvider?.surName}
                </span>
            </td>
            <td className={`${css_td} lg:w-5/24`}>
                <span className={`${css_span}`}>Total</span>
                <span className={`${css_span_2}`}>
                    {parcePrice(sumaDetail())}
                </span>
            </td>
            <td className={`${css_td} lg:w-5/24`}>
                <span className={`${css_span} rounded-bl-xl`}>Opciones</span>
                <Link
                    href={`quotes/qt/${data?.id}`}
                    className={`${css_span_2}`}
                >
                    ver
                </Link>
            </td>
        </tr>
    );
};

TrBody.propTypes = {
    data: PropTypes.object,
};
export default Index;
