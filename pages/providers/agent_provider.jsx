import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Inputs } from "../../components/Inputs";
import useFormData from "../../hooks/useFormData";
import { useMutation } from "@apollo/client";
import { ButtonLoading } from "../../components/ButtonLoading";
import useMutacionEffect from "../../hooks/useMutacionEffect";
import { CREATE_AGENT, UPDATE_AGENT } from "@/graphql/providers/mutation";
import { Modal } from "../../utlis/Modal";

const AgentProvider = ({ id, modalNewAgent, refetch, detail = null }) => {
    const { form, formData, updateFormData } = useFormData(null);
    const [loadingG, setLoadingG] = useState(null);
    const [create, { data, loading, error }] = useMutation(CREATE_AGENT);
    const [update, { data: dataUp, loading: loadingUp, error: errorUp }] =
        useMutation(UPDATE_AGENT);
    const { mutationEffect } = useMutacionEffect(null);

    const submitForm = (e) => {
        e.preventDefault();
        if (detail == null) {
            setLoadingG(true);
            create({
                variables: {
                    data: {
                        email: formData.email,
                        phone: formData.phone,
                        surName: formData.surName,
                        name: formData.name,
                        provider: {
                            connect: {
                                id: parseInt(id),
                            },
                        },
                    },
                },
            }).catch((error) => {
                console.log(error);
            });
        } else {
            setLoadingG(true);
            update({
                variables: {
                    data: {
                        email: {
                            set: detail?.mail,
                        },
                        name: {
                            set: detail?.name,
                        },
                        phone: {
                            set: detail?.phone,
                        },
                        surName: {
                            set: detail?.surName,
                        },
                        provider: {
                            connect: {
                                id: id,
                            },
                        },
                    },
                    where: {
                        id: detail?.id,
                    },
                },
            });
        }
    };

    useEffect(() => {
        mutationEffect(data, error, refetch);
        if (data) {
            modalNewAgent(false);
        }
    }, [data, error]);

    return (
        <Modal closeModal={modalNewAgent}>
            <div className="flex-col md:w-96 border border-neutral-50 shadow-lg rounded-lg py-5 px-4">
                <form
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                >
                    <h1 className="flex justify-center font-bold text-amariz_4 mb-10">
                        AGENTES
                    </h1>
                    <Inputs
                        name="name"
                        label="Nombres"
                        required={true}
                        defaultValue={detail?.name}
                    />
                    <Inputs
                        name="surName"
                        label="Apellidos"
                        required={true}
                        defaultValue={detail?.surName}
                    />
                    <Inputs
                        name="phone"
                        label="Teléfono"
                        required={true}
                        defaultValue={detail?.phone}
                    />
                    <Inputs
                        name="email"
                        label="Email"
                        required={true}
                        defaultValue={detail?.email}
                    />
                    <br />
                    <ButtonLoading
                        name={"GUARDAR"}
                        type="submit"
                        loading={loading}
                    />
                </form>
            </div>
            {/* <ToastContainer /> */}
        </Modal>
    );
};

AgentProvider.propTypes = {
    id: PropTypes.int,
    modalNewAgent: PropTypes.func,
    refetch: PropTypes.func,
};

export default AgentProvider;
