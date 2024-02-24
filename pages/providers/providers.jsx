import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Inputs } from "../../components/Inputs";
import useFormData from "../../hooks/useFormData";
import { useMutation } from "@apollo/client";
import useMutacionEffect from "../../hooks/useMutacionEffect";
import { CREATE_PROVIDER, UPDATE_PROVIDER } from "@/graphql/providers/mutation";
import Modal from "./Modal";

const Provider = ({ setModalPvd, refetch, detail = null, cleanData }) => {
    const [loadingG, setLoadingG] = useState(null);
    const { form, formData, updateFormData } = useFormData(null);
    const { mutationEffect } = useMutacionEffect(null);
    const [create, { data, error }] = useMutation(CREATE_PROVIDER);
    const [update, { data: dataUp, error: errorUp }] =
        useMutation(UPDATE_PROVIDER);
    
        console.log('detail :', detail);

    const submitForm = (e) => {
        e.preventDefault();
        if (detail != null) {
            setLoadingG(true);
            update({
                variables: {
                    data: {
                        addredd: {
                            set: formData.addredd,
                        },
                        name: {
                            set: formData.name,
                        },
                        nit: {
                            set: formData.nit,
                        },
                    },
                    where: {
                        id: detail.id,
                    },
                },
            });
        } else {
            setLoadingG(true);
            create({ variables: { data: formData } });
        }
    };

    useEffect(() => {
        if (detail != null) {
            mutationEffect(dataUp, errorUp, refetch);
        } else {
            mutationEffect(data, error, refetch);
        }
        if (data || dataUp) {
            setModalPvd(false);
        }
    }, [data, error, dataUp, errorUp]);

    return (
        <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
            <Modal
                closeModal={setModalPvd}
                title={"Provedores"}
                loading={loadingG}
                showCancelBtt={formData}
                cleanData={cleanData}
            >
                <Inputs
                    name="name"
                    label="Nombre o razón social"
                    required={true}
                    defaultValue={detail?.name}
                />
                <Inputs
                    name="nit"
                    label="NIT"
                    required={true}
                    defaultValue={detail?.nit}
                />
                <Inputs
                    name="addredd"
                    label="Dirección"
                    required={true}
                    defaultValue={detail?.addredd}
                />
                <br />
            </Modal>
        </form>
    );
};

Provider.propTypes = {
    setModalPvd: PropTypes.func,
    refetch: PropTypes.func,
};

export default Provider;
