import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_QOUTES, UPDATE_QDETAIL } from "@/graphql/qoutes/mutation";
import { QOUTE_BY_ID } from "../../../graphql/qoutes/query";
import useFormData from "@/hooks/useFormData";
import useParsePrice from "../../../hooks/useParcePrice";
import { isObject } from "class-validator";
import {
    edit_icons,
    xmark_icons,
    save_icons,
    loadingP_icons,
} from "../../../utlis/icons";
import { InputsTable } from "../../../components/InputsTable";
import useMutacionEffect from "@/hooks/useMutacionEffect";
import Select from "../SelectClient";
import SideBar from "../../../components/SideBar";
import HeaderImagen from "../../../components/HeaderImagen";
import { ButtonIcon } from "../../../components/ButtonIcon";
import { ButtonIconLoadinig } from "../../../components/ButtonIconLoadinig";
import { GlobalContext } from "../../../context/useGlobalsContext";

let sumatory = [
    {
        id: "sub",
        bgColor: "bg-amariz_4",
        nameFile: "SubTotal",
        value: 0,
        css: "font-light",
        css_2: "md:border-b-[0.3px] text-white",
    },
    {
        id: "iva",
        bgColor: "bg-amariz_5",
        nameFile: "IVA",
        value: 0,
        css: "font-light",
        css_2: "md:border-b-[0.3px] text-white",
    },
    {
        id: "tot",
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
    const { qouteIdAgtSel, qouteIdPvdSel } = useContext(GlobalContext);
    const { parcePrice } = useParsePrice();
    const { form, formData, updateFormData } = useFormData({});
    const { mutationEffect } = useMutacionEffect(null);
    const [sub_t, setSub_t] = useState(0);
    const [iva, setIva] = useState(0);
    const [total, setTotal] = useState(0);
    const [editQoute, setEditQoute] = useState(false);
    const [update, { data: dataUpd, error: errorUpd, loading: loadingUpd }] =
        useMutation(UPDATE_QOUTES);
    const [updateDet, { data: dataDet, error: errorDet, loading: loadingDet }] =
        useMutation(UPDATE_QDETAIL);
    const { data, error, refetch } = useQuery(QOUTE_BY_ID, {
        variables: {
            where: {
                id: idQoutes,
            },
        },
    });
    
    useEffect(() => {
        if (isObject(data)) {
            var subT = 0;
            data?.findUniqueQoutes?.qoutesDetails?.map((k) => {
                subT = subT + k.price * k.unit;
            });
            setSub_t(subT);
            setIva(subT * 0.19);
            setTotal(subT * 1.19);
        }
    }, [data]);

    const submitForm = (e) => {
        e.preventDefault();
        updateDet({
            variables: {
                data: {
                    description: {
                        set: formData.description,
                    },
                    price: {
                        set: parseFloat(formData.price),
                    },
                    unit: {
                        set: parseInt(formData.unit),
                    },
                },
                where: {
                    id: formData.id,
                },
            },
        });
    };

    const updateCouteProvider = () => {
        update({
            variables: {
                data: {
                    provider: {
                        connect: {
                            id: qouteIdPvdSel,
                        },
                    },
                    agentProvider: {
                        connect: {
                            id: qouteIdAgtSel,
                        },
                    },
                },
                where: {
                    id: idQoutes,
                },
            },
        }).then(() => {
            setEditQoute(false);
        });
    };

    useEffect(() => {
        if (dataUpd || errorUpd) {
            mutationEffect(dataUpd, errorUpd, refetch);
        } else if (dataDet || errorDet) {
            mutationEffect(dataDet, errorDet, refetch);
        }
    }, [dataUpd, errorUpd, dataDet, errorDet]);

    return (
        <div className="flex p-2 text-sm text-gray-800">
            <SideBar />
            <div className="flex-col justify-start md:w-10/12 md:px-4">
                <HeaderImagen />
                <h4 className="text-center p-4 text-2xl bg-amariz_4 text-white">
                    Cotizaciones
                </h4>
                <div className="md:px-4 lg:px-16 xl:px-20 bg-gray-100 py-5 md:py-10">
                    <div className="bg-white">
                        <div className="flex bg-amariz_4 content-center items-center text-white font-bold text-lg py-3">
                            <span className="px-6 border-r-2">
                                {data?.findUniqueQoutes?.id.slice(0, 5)}
                            </span>
                            <div className="flex justify-between content-center items-center w-full">
                                <div>
                                    {editQoute ? (
                                        <Select
                                            defaulProvider={
                                                data?.findUniqueQoutes?.provider
                                                    ?.name
                                            }
                                        />
                                    ) : (
                                        <h5 className="px-5">
                                            {
                                                data?.findUniqueQoutes?.provider
                                                    ?.name
                                            }
                                        </h5>
                                    )}
                                </div>
                                <div>
                                    {editQoute ? (
                                        <div className="flex pr-3">
                                            {qouteIdPvdSel && qouteIdAgtSel ? (
                                                <ButtonIconLoadinig
                                                    onclick={() => {
                                                        updateCouteProvider();
                                                    }}
                                                    loading={loadingUpd}
                                                    icon={save_icons("#fff")}
                                                    bg_color="amariz_6"
                                                    icon_color="white"
                                                />
                                            ) : (
                                                <></>
                                            )}
                                            <ButtonIcon
                                                arg={!editQoute}
                                                onclick={setEditQoute}
                                                icon={xmark_icons()}
                                                bg_color="white"
                                            />
                                        </div>
                                    ) : (
                                        <ButtonIcon
                                            arg={!editQoute}
                                            onclick={setEditQoute}
                                            icon={edit_icons("#fff")}
                                            bg_color="amariz_4"
                                            css="mr-3 mt-1"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="md:flex p-5 bg-white">
                            <div className="md:mr-10">
                                <ul>
                                    <div className="">
                                        <span className="font-semibold  pr-2">
                                            Ejecutivo:
                                        </span>
                                        <span>
                                            {data?.findUniqueQoutes
                                                ?.agentProvider?.name +
                                                " " +
                                                data?.findUniqueQoutes
                                                    ?.agentProvider?.surName}
                                        </span>
                                    </div>
                                    <li>
                                        <span className="font-semibold  pr-2">
                                            Nit:
                                        </span>
                                        <span>
                                            {
                                                data?.findUniqueQoutes?.provider
                                                    ?.nit
                                            }
                                        </span>
                                    </li>
                                    <li>
                                        <span className="font-semibold  pr-2">
                                            Telefono:
                                        </span>
                                        <span>
                                            {
                                                data?.findUniqueQoutes
                                                    ?.agentProvider?.phone
                                            }
                                        </span>
                                    </li>
                                    <li>
                                        <span className="font-semibold  pr-2">
                                            Email:
                                        </span>
                                        <span>
                                            {
                                                data?.findUniqueQoutes
                                                    ?.agentProvider?.email
                                            }
                                        </span>
                                    </li>
                                    <li>
                                        <span className="font-semibold  pr-2">
                                            Dirección:
                                        </span>
                                        <span>
                                            {
                                                data?.findUniqueQoutes?.provider
                                                    ?.address
                                            }
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <span className="font-semibold  pr-2">
                                            Fecha emisión
                                        </span>
                                        <span>
                                            {data?.findUniqueQoutes?.createdAt.slice(
                                                0,
                                                10
                                            )}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="font-semibold  pr-2">
                                            Fecha vencimiento
                                        </span>
                                        <span>items</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={submitForm}
                        onChange={updateFormData}
                        ref={form}
                    >
                        <table className="border-collapse w-full">
                            <thead>
                                <tr>
                                    <th
                                        className={`${css_th} hidden bg-amariz_4`}
                                    ></th>
                                    <th className={`${css_th} bg-amariz_4`}>
                                        Descripción
                                    </th>
                                    <th className={`${css_th} bg-amariz_4`}>
                                        Unit
                                    </th>
                                    <th className={`${css_th} bg-amariz_4`}>
                                        Precio
                                    </th>
                                    <th
                                        className={`${css_th} md:border-x-4 md:border-amariz_6 md:bg-amariz_6`}
                                    >
                                        Valor
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.findUniqueQoutes?.qoutesDetails?.map(
                                    (obj) => {
                                        return (
                                            <TrBody
                                                key={obj.id}
                                                detail={obj}
                                                parcePrice={parcePrice}
                                                loadingDet={loadingDet}
                                                dataDet={dataDet}
                                            />
                                        );
                                    }
                                )}
                                {sumatory.map((item) => {
                                    return (
                                        <SumatoryTr
                                            key={item.id}
                                            item={item}
                                            parcePrice={parcePrice}
                                            sub_t={sub_t}
                                            iva={iva}
                                            total={total}
                                        />
                                    );
                                })}
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
};

const SumatoryTr = ({ item, parcePrice, sub_t, iva, total }) => {
    console.log("item :", item.id);

    const h = "flex md:table-row";
    const j =
        "grid content-center text-center md:pl-0 md:text-center pr-2 py-2 w-full pl-4 h-full";
    const k =
        "md:w-5/24 w-17/24 md:border-b-[0.3px] md:border-b-white border-r-[0.3px] text-white md:border-x-4 md:border-amariz_6";
    return (
        <tr className={`${h} ${item.bgColor}`}>
            <td className="md:w-1/24 bg-white"></td>
            <td className="md:w-11/24 bg-white"></td>
            <td className="md:w-2/24 bg-white"></td>
            <td
                className={`md:w-5/24 w-7/24 ${item.css_2} md:border-r-[0.3px] md:border-0`}
            >
                <span className={`${j} ${item.css}`}>{item.nameFile}</span>
            </td>
            <td className={k}>
                <span className={`${j} ${item.css} font-bold`}>
                    {parcePrice(
                        item.id == "sub"
                            ? sub_t
                            : item.id == "iva"
                            ? iva
                            : total
                    )}
                </span>
            </td>
        </tr>
    );
};

const TrBody = ({ detail, parcePrice, loadingDet, dataDet }) => {
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        if (dataDet) {
            setEdit(false);
        }
    }, [dataDet]);

    return (
        <tr className={css_tr}>
            <td className={`${css_td} hidden items-center content-center`}>
                {edit ? (
                    <div className="flex items-center content-center">
                        <ButtonIcon
                            onclick={setEdit}
                            arg={!edit}
                            icon={xmark_icons()}
                        />
                        {loadingDet ? (
                            loadingP_icons()
                        ) : (
                            <ButtonIconLoadinig
                                type="submit"
                                onclick={() => {}}
                                icon={save_icons("#fff")}
                                bg_color="amariz_6"
                            />
                        )}
                    </div>
                ) : (
                    <ButtonIcon
                        arg={!edit}
                        onclick={setEdit}
                        icon={edit_icons()}
                    />
                )}
            </td>
            <td className={`${css_td} w-full md:w-10/24`}>
                <span className={`${css_span} rounded-tl-xl`}>Descripción</span>
                {edit ? (
                    <>
                        <input
                            className="hidden"
                            name="id"
                            defaultValue={detail?.id}
                        />
                        <InputsTable
                            name="description"
                            defaultValue={detail?.description}
                        />
                    </>
                ) : (
                    <p className={`${css_span_2} border-t-[0.3px] `}>
                        {detail?.description}
                    </p>
                )}
            </td>
            <td className={`${css_td} w-full md:w-2/24`}>
                <span className={css_span}>Unit</span>
                {edit ? (
                    <InputsTable name="unit" defaultValue={detail?.unit} />
                ) : (
                    <span className={css_span_2}>{detail?.unit}</span>
                )}
            </td>
            <td className={`${css_td} w-full md:w-5/24`}>
                <span className={css_span}>Precio</span>
                {edit ? (
                    <InputsTable name="price" defaultValue={detail?.price} />
                ) : (
                    <span className={css_span_2}>
                        {parcePrice(detail?.price)}
                    </span>
                )}
            </td>
            <td
                className={`${css_td} w-full md:w-5/24 md:border-x-4 md:border-amariz_6`}
            >
                <span className={`${css_span}`}>Valor</span>
                <span className={`${css_span_2} font-bold`}>
                    {parcePrice(detail?.unit * detail?.price)}
                </span>
            </td>
            <td className={`${css_td} w-full md:hidden`}>
                <span className={`${css_span} rounded-bl-xl`}>Opciones</span>
                <div className={`${css_span_2} justify-start`}>
                    <button
                        type="button"
                        onClick={() => {
                            setEdit(!edit);
                        }}
                        className="underline"
                    >
                        {edit ? "Cancelar" : "Editar"}
                    </button>
                </div>
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
