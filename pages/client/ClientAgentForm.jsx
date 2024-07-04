import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Inputs } from "@/components/Inputs";
import useFormData from "@/hooks/useFormData";
import { useMutation } from "@apollo/client";
import useMutacionEffect from "@/hooks/useMutacionEffect";
import { CREATE_AGENT, UPDATE_AGENT } from "@/graphql/client/mutation";
import Modal from "../../components/Modal";

const ClientAgentForm = ({ setModal, refetch, detail = {}, cleanData }) => {
    const { form, formData, updateFormData } = useFormData({});
    const [loadingG, setLoadingG] = useState(false);
    const [create, { data, error }] = useMutation(CREATE_AGENT);
    const [update, { data: dataUp, error: errorUp }] =
        useMutation(UPDATE_AGENT);
    const { mutationEffect } = useMutacionEffect(null);

    const submitForm = (e) => {
        e.preventDefault();
        if (Object.keys(detail).includes("idProvider")) {
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
                                id: detail.idProvider,
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
                            set: formData?.email,
                        },
                        name: {
                            set: formData?.name,
                        },
                        phone: {
                            set: formData?.phone,
                        },
                        surName: {
                            set: formData?.surName,
                        },
                        provider: {
                            connect: {
                                id: detail.providerId,
                            },
                        },
                    },
                    where: {
                        id: detail.id,
                    },
                },
            });
        }
    };

    useEffect(() => {
        if (!detail.idProvider) {
            mutationEffect(dataUp, errorUp, refetch);
        } else {
            mutationEffect(data, error, refetch);
        }
        if (data || dataUp) {
            setModal(false);
        }
    }, [data, error, dataUp, errorUp]);

    return (
        <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
            <Modal
                closeModal={setModal}
                title={"Agente"}
                loading={loadingG}
                showCancelBtt={formData}
                cleanData={cleanData}
            >
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
            </Modal>
        </form>
    );
};

ClientAgentForm.propTypes = {
    setModal: PropTypes.func,
    refetch: PropTypes.func,
    cleanData: PropTypes.func,
    detail: PropTypes.object,
};

export default ClientAgentForm;
