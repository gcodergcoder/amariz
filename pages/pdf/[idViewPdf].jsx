import React, { useState, useEffect } from "react";
import { usePDF } from "react-to-pdf";
import { QOUTE_BY_ID } from "../../graphql/qoutes/query";
import { useRouter } from "next/router";
import useParseDate from "../../hooks/useParceDate";
import { useQuery } from "@apollo/client";
import useParsePrice from "../../hooks/useParcePrice";
import { sping_icon } from "../../utlis/icons";

const header = ["Id", "Descripción", "Cantidad", "Precio", "Total"];

const ViewPDF = () => {
   const router = useRouter();
   const { idViewPdf } = router.query;
   const { parseDate } = useParseDate();
   const [dateParsed, setDateParsed] = useState("");
   const [suma, setSuma] = useState({
      "Sub Total": 0.0,
      "Iva (19%)": 0.0,
      TOTAL: 0.0,
   });
   const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
   const { data, error, loading } = useQuery(QOUTE_BY_ID, {
      variables: {
         where: {
            id: idViewPdf,
         },
      },
   });

   const testDelete = () =>{
      window.print()
   }

   useEffect(() => {
      if (suma.TOTAL != 0) toPDF();
   }, [suma]);

   useEffect(() => {
      if (data) {
         setDateParsed(parseDate(data?.findUniqueQoutes?.createdAt));
      }
      let subtotal = 0;
      data?.findUniqueQoutes?.qoutesDetails?.map((value) => {
         subtotal = subtotal + value.unit * value.price;
      });
      setSuma({
         "Sub Total": subtotal,
         "Iva (19%)": subtotal * 0.19,
         TOTAL: subtotal * 1.19,
      });
   }, [data]);

   if (loading) {
      return (
         <div className="flex h-screen w-full content-center">
            {sping_icon()}
         </div>
      );
   }

   return (
      <div className="px-10">
         <meta
            name="viewport"
            content="width=device-width, initial-scale=0.3"
         />
         <div>
            <div className="flex justify-between content-center items-center mb-10">
               <div className="w-40 h-44 bg-cover bg-logo-img"></div>
               <h1 className="font-semibold text-5xl text-neutral-800">
                  COTIZACIÓN
               </h1>
            </div>
            <button onClick={()=>{testDelete()}}>holaaa</button>
            <div className="flex justify-between mb-10">
               <div className="flex-col justify-between">
                  <h6 className="uppercase text-xs font-normal">
                     DESTINO A
                  </h6>
                  <h2 className="text-2xl font-bold pr-10">
                     {data?.findUniqueQoutes?.provider?.name}
                  </h2>
                  <h6 className="border-b-[0.5px] border-gray-400 pb-4 text-xxs">
                     {"NIT: "}
                     <span>{data?.findUniqueQoutes?.provider?.nit}</span>
                  </h6>
                  <ul className="mt-4 text-xs">
                     <li className="font-medium">
                        {"Ejecutivo: "}
                        <span className="font-normal text-gray-700">
                           {
                              data?.findUniqueQoutes?.agentProvider
                                 ?.name
                           }
                        </span>
                     </li>
                     <li className="font-medium">
                        {"Teléfono: "}
                        <span className="font-normal text-gray-700">
                           {
                              data?.findUniqueQoutes?.agentProvider
                                 ?.phone
                           }
                        </span>
                     </li>
                     <li className="font-medium">
                        {"Email: "}
                        <span className="font-normal text-gray-700">
                           {
                              data?.findUniqueQoutes?.agentProvider
                                 ?.email
                           }
                        </span>
                     </li>
                  </ul>
               </div>
               <div className="flex-col justify-between">
                  <ul className="mt-4 text-xs border-b-[0.5px] border-gray-400 pb-4 ">
                     <li className="font-medium">
                        {"Cotización Nº : "}
                        <span className="font-normal text-gray-700">
                           {data?.findUniqueQoutes?.id?.slice(0, 10)}
                        </span>
                     </li>
                     <li className="font-medium">
                        {"Fecha: "}
                        <span className="font-normal text-gray-700">
                           {parseDate(
                              data?.findUniqueQoutes?.createdAt
                           )}
                        </span>
                     </li>
                  </ul>
                  <ul className="mt-4 text-xs">
                     <li className="font-medium">
                        {"Vence: "}
                        <span className="font-normal text-gray-700">
                           {dateParsed}
                        </span>
                     </li>
                  </ul>
               </div>
            </div>
            <table className="w-full">
               <thead>
                  <tr className="bg-gray-700 text-white">
                     {header.map((k) => {
                        return (
                           <th
                              key={k}
                              className="px-2 py-4 w-auto uppercase text-xs font-semibold"
                           >
                              {k}
                           </th>
                        );
                     })}
                  </tr>
               </thead>
               <tbody className="font-light text-xs">
                  {data?.findUniqueQoutes?.qoutesDetails.map((j) => {
                     return (
                        <Td
                           key={j.id}
                           value={j}
                           qoutesDetails={
                              data?.findUniqueQoutes?.qoutesDetails
                           }
                           len={
                              data?.findUniqueQoutes?.qoutesDetails
                                 ?.length
                           }
                        />
                     );
                  })}
               </tbody>
               <tfoot>
                  {["Sub Total", "Iva (19%)", "TOTAL"].map((p) => {
                     return <Tf key={p} value={p} suma={suma} />;
                  })}
               </tfoot>
            </table>
         </div>
         <div className="flex justify-between mt-20 text-xs">
            <div className="flex-col w-8/12 px-20">
               <h6 className="mb-4 font-semibold">
                  Términos & Condiciones
               </h6>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus officiis aliquid deleniti. Minus velit a provident
                  eos necessitatibus, hic optio, sequi omnis nesciunt
                  repudiandae aut ea perspiciatis voluptatem fuga! Quod?
               </p>
            </div>
            <div className="flex-col w-4/12">
               <span></span>
               <ul className="text-center mt-2 border-t border-gray-300">
                  <li className="font-semibold mt-4">Andrea Amariz</li>
                  <li>Gerente</li>
               </ul>
            </div>
         </div>
         <div className="flex justify-between items-center text-xs mt-10 border-t p-4 border-gray-300">
            <ul>
               <li>Amariz Eu</li>
               <li>NIT 827420434-9</li>
            </ul>
            <ul>
               <li>amariz.agencia@gmail.com</li>
               <li>{"(+57) 312 809 7912"}</li>
            </ul>
            <ul>
               <li>Bogotá D.C.</li>
            </ul>
         </div>
         <div className="bg-gray-600 h-10"></div>
      </div>
   );
};

const Tf = ({ value, suma }) => {
   const [bg, setBg] = useState("");
   const { parcePrice } = useParsePrice();

   useEffect(() => {
      if (value == "TOTAL") {
         setBg("bg-gray-500 text-white");
      }
   }, [value]);

   return (
      <tr className="text-xs font-bold">
         <th className={` ${bg} p-3 border-b border-gray-300`}></th>
         <th className={` ${bg} p-3 border-b border-gray-300`}></th>
         <th
            className={` ${bg} p-3 text-end border-b border-gray-300`}
            colSpan="2"
         >
            {value}
         </th>
         <td className={` ${bg} p-3 border-b border-gray-300 text-center`}>
            {parcePrice(suma[value])}
         </td>
      </tr>
   );
};

const Td = ({ value, len, qoutesDetails }) => {
   const index = qoutesDetails.findIndex((object) => object.id == value.id);
   const [bg, setBg] = useState("");
   const [border, setBorder] = useState("");
   const { parcePrice } = useParsePrice();
   useEffect(() => {
      console.log("index :", (index + 1) % 2);
      if ((index + 1) % 2 == 0) {
         setBg("bg-gray-100");
      } else {
         setBg("");
      }
      if (index + 1 == len) {
         setBorder("border-b border-gray-300");
      }
   }, []);

   return (
      <tr>
         <td className={` ${bg} ${border} p-3 text-center font-thin`}>
            {value.id.slice(-1)}
         </td>
         <td className={` ${bg} ${border} p-3`}>{value.description}</td>
         <td className={` ${bg} ${border} p-3 text-center`}>{value.unit}</td>
         <td className={` ${bg} ${border} p-3 text-center`}>
            {parcePrice(value.price)}
         </td>
         <td className={` ${bg} ${border} p-3 text-center`}>
            {parcePrice(value.price * value.unit)}
         </td>
      </tr>
   );
};
export default ViewPDF;
