import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Inputs } from "@/components/Inputs";
import useFormData from "@/hooks/useFormData";
import { useMutation } from "@apollo/client";
import useMutacionEffect from "@/hooks/useMutacionEffect";
import { CREATE_CLIENT, UPDATE_CLIENT } from "@/graphql/client/mutation";
import Modal from "../../components/Modal";

const ClientForm = ({ setModal, refetch, detail = {}, cleanData }) => {
    const [loadingG, setLoadingG] = useState(false);
    const { form, formData, updateFormData } = useFormData({});
    const { mutationEffect } = useMutacionEffect(null);
    const [create, { data, error }] = useMutation(CREATE_CLIENT);
    const [update, { data: dataUp, error: errorUp }] =
        useMutation(UPDATE_CLIENT);

    const submitForm = (e) => {
        e.preventDefault();
        if (Object.keys(detail).length != 0) {
            setLoadingG(true);
            update({
                variables: {
                    data: {
                        address: {
                            set: formData.address,
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
        if (Object.keys(detail).length != 0) {
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
                title={"Cliente"}
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
                    name="address"
                    label="Dirección"
                    required={true}
                    defaultValue={detail?.address}
                />
                <br />
            </Modal>
        </form>
    );
};

ClientForm.propTypes = {
    setModal: PropTypes.func,
    refetch: PropTypes.func,
    cleanData: PropTypes.func,
    detail: PropTypes.object,
};

export default ClientForm;
