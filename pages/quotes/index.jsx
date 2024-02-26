import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const dataP = [
    {
        id: "13535",
        client:
            "Adidas",
        agent: "camila@gmail.com",
        date: 23093030,
        total: 23093030,
    },
    {
        id: "342562",
        client:
            "Nikw",
        agent: "pedrp@gmail.com",
        date: 23093030,
        total: 23093030,
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

    return (
        <div className="p-2 text-sm text-gray-800 lg:md-40 xl:px-60">
            <h4 className="text-center p-4 text-2xl bg-amariz_4 text-white mb-3">
                Cotizaciones
            </h4>
            <table className="border-collapse w-full">
                <thead>
                    <tr>
                        <th className={`${css_th} bg-amariz_4`}>Cliente</th>
                        <th className={`${css_th} bg-amariz_4`}>Agente</th>
                        <th className={`${css_th} bg-amariz_4`}>Fecha creación</th>
                        <th className={`${css_th} bg-amariz_4`}>Total</th>
                        <th className={`${css_th} bg-amariz_4`}></th>
                    </tr>
                </thead>
                <tbody>
                    {dataP.map((ob) => (
                        <TrBody key={ob?.id} data={ob} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const TrBody = ({ data }) => {
    return (
        <tr className={css_tr}>
            <td className={`${css_td} md:w-12/24`}>
                <span className={`${css_span} rounded-tl-xl`}>Cliente</span>
                <p className={`${css_span_2} border-t-[0.3px] `}>
                    {data?.client}
                </p>
            </td>
            <td className={`${css_td} md:w-2/24`}>
                <span className={css_span}>Agente</span>
                <span className={css_span_2}>{data?.agent}</span>
            </td>
            <td className={`${css_td} md:w-5/24`}>
                <span className={css_span}>Fecha creación</span>
                <span className={css_span_2}>{data?.date}</span>
            </td>
            <td
                className={`${css_td} md:w-5/24`}
            >
                <span className={`${css_span}`}>Total</span>
                <span className={`${css_span_2}`}>{data?.total}</span>
            </td>
            <td className={`${css_td} md:w-5/24`}>
                <span className={`${css_span} rounded-bl-xl`}>Opciones</span>
                <Link href={`quotes/qt/${"clt3bcm5u00002nqpuhg3w9xu"}`} className={`${css_span_2}`}>ver</Link>
            </td>
        </tr>
    );
};

TrBody.propTypes = {
    data: PropTypes.object,
};
export default Index;
