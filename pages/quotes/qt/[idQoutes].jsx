import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_QOUTES, UPDATE_QOUTES } from "@/graphql/qoutes/mutation";
import { QOUTE_BY_ID } from "../../../graphql/qoutes/query";



const numberFormat = (value) =>
  new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'COL'
  }).format(value);

let sumatory = [
    {
        id: "a1z4",
        bgColor: "bg-amariz_4",
        nameFile: "SubTotal",
        value: 0,
        css: "font-light",
        css_2: "md:border-b-[0.3px] text-white",
    },
    {
        id: "b2s1",
        bgColor: "bg-amariz_5",
        nameFile: "IVA",
        value: 0,
        css: "font-light",
        css_2: "md:border-b-[0.3px] text-white",
    },
    {
        id: "c38d",
        bgColor: "bg-amariz_6",
        nameFile: "Total Cotización",
        value: 0,
        css: "font-bold",
        css_2: "md:bg-white text-white md:text-black",
    },
];

const css_th =
    "p-3 font-bold uppercase text-white hidden md:table-cell border border-gray-300 md:border-0";
const css_td =
    "w-full md:w-auto text-gray-800 text-center block md:table-cell relative md:static";
const css_span =
    "md:hidden absolute grid content-center top-[0px] left-0 bg-amariz_4 text-white border-[0.5px] border-white px-2 py-1 h-full w-28 text-xs font-bold uppercase";
const css_span_2 =
    "border-b-[0.3px] border-r-[0.3px] md:border-0 grid content-center text-left md:pl-0 md:text-center pl-32 pr-2 py-2";
const css_tr =
    "bg-white md:hover:bg-gray-100 text-sm flex md:table-row flex-row md:flex-row flex-wrap md:flex-no-wrap mb-5 md:mb-0 md:border-b";
const Index = () => {
    const router = useRouter();
    const { idQoutes } = router.query;
    const [subTotal, setSubTotal] = useState(0);
    const [suma, setSuma] = useState([]);
    const [create, { data: dataCreate, error: errorCreate }] =
        useMutation(CREATE_QOUTES);
    const [update, { data: dataUpd, error: errorUped }] =
        useMutation(UPDATE_QOUTES);
    const { data, error, refetch } = useQuery(QOUTE_BY_ID, {
        variables: {
            where: {
                id: idQoutes,
            },
        },
    });

    useEffect(() => {
        if(data){
            var subT = 0
            data.findUniqueQoutes.qoutesDetails.map((k)=>{
                subT = subT + (k.price * k.unit)
            })
            setSubTotal(subT)
            sumatory[0].value = subTotal
            sumatory[1].value = subTotal*0.19
            sumatory[2].value = sumatory[1].value + subTotal
            setSuma(sumatory)

        }
    }, [data])

    console.log('sumatory[2].value :', suma);

    return (
        <div className="p-2 text-sm text-gray-800 lg:md-40 xl:px-60">
            <h4 className="text-center p-4 text-2xl bg-amariz_4 text-white">
                Cotizaciones
            </h4>
            <div>
                <div className="flex justify-between bg-amariz_4 text-white p-3 my-2 font-bold text-lg">
                    <h5>{data?.findUniqueQoutes?.provider?.name}</h5>
                    <span>{data?.findUniqueQoutes?.id.slice(0,5)}</span>
                </div>
                <div className="md:flex mb-2 px-4">
                    <div className="md:mr-10">
                        <ul>
                            <div className="">
                                <span className="font-semibold  pr-2">Ejecutivo:</span>
                                <span>{data?.findUniqueQoutes?.agentProvider?.name + " " + data?.findUniqueQoutes?.agentProvider?.surName}</span>
                            </div>
                            <li>
                                <span className="font-semibold  pr-2">Nit:</span>
                                <span>{data?.findUniqueQoutes?.provider?.nit}</span>
                            </li>
                            <li>
                                <span className="font-semibold  pr-2">Telefono:</span>
                                <span>{data?.findUniqueQoutes?.agentProvider?.phone} </span>
                            </li>
                            <li>
                                <span className="font-semibold  pr-2">Email:</span>
                                <span>{data?.findUniqueQoutes?.agentProvider?.email }</span>
                            </li>
                            <li>
                                <span className="font-semibold  pr-2">Dirección:</span>
                                <span>{data?.findUniqueQoutes?.provider?.address }</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <span className="font-semibold  pr-2">Fecha emisión</span>
                                <span>{data?.findUniqueQoutes?.createdAt.slice(0,10)}</span>
                            </li>
                            <li>
                                <span className="font-semibold  pr-2">Fecha vencimiento</span>
                                <span>items</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <table className="border-collapse w-full">
                <thead>
                    <tr>
                        <th className={`${css_th} bg-amariz_4`}>Descripción</th>
                        <th className={`${css_th} bg-amariz_4`}>Unit</th>
                        <th className={`${css_th} bg-amariz_4`}>Precio</th>
                        <th
                            className={`${css_th} md:border-x-4 md:border-amariz_6 md:bg-amariz_6`}
                        >
                            Valor
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.findUniqueQoutes?.qoutesDetails?.map((obj) => {
                        return <TrBody key={obj.id} detail={obj} />;
                    })}

                    {sumatory.map((item) => {
                        return <SumatoryTr key={item.id} item={item} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

const SumatoryTr = ({ item }) => {
    const h = "flex md:table-row mx-1";
    const j =
        "grid content-center text-center md:pl-0 md:text-center pr-2 py-2 w-full pl-4 h-full";
    const k =
        "md:w-5/24 w-17/24 md:border-b-[0.3px] md:border-b-white border-r-[0.3px] text-white md:border-x-4 md:border-amariz_6";
    return (
        <tr className={`${h} ${item.bgColor}`}>
            <td className="md:w-12/24 bg-white"></td>
            <td className="md:w-2/24 bg-white"></td>
            <td
                className={`md:w-5/24 w-7/24 ${item.css_2} md:border-r-[0.3px] md:border-0`}
            >
                <span className={`${j} ${item.css}`}>{item.nameFile}</span>
            </td>
            <td className={k}>
                <span className={`${j} ${item.css} font-bold`}>
                    {"$"+numberFormat(item.value)}
                </span>
            </td>
        </tr>
    );
};

const TrBody = ({ detail }) => {
    return (
        <tr className={css_tr}>
            <td className={`${css_td} md:w-12/24`}>
                <span className={`${css_span} rounded-tl-xl`}>Descripción</span>
                <p className={`${css_span_2} border-t-[0.3px] `}>
                    {detail?.description}
                </p>
            </td>
            <td className={`${css_td} md:w-2/24`}>
                <span className={css_span}>Unit</span>
                <span className={css_span_2}>{detail?.unit}</span>
            </td>
            <td className={`${css_td} md:w-5/24`}>
                <span className={css_span}>Precio</span>
                <span className={css_span_2}>{detail?.price}</span>
            </td>
            <td
                className={`${css_td} md:w-5/24 md:border-x-4 md:border-amariz_6`}
            >
                <span className={`${css_span} rounded-bl-xl`}>Valor</span>
                <span className={`${css_span_2} font-bold`}>{detail?.unit * detail?.price}</span>
            </td>
        </tr>
    );
};

TrBody.propTypes = {
    detail: PropTypes.object,
};
SumatoryTr.propTypes = {
    item: PropTypes.object,
};
export default Index;
