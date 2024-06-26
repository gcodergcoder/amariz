import React, { useState } from "react";
import PropTypes from "prop-types";
import { Inputs } from "@/components/Inputs";
import useFormData from "@/hooks/useFormData";
import Modal from "../client/Modal";

const QuotesModal = ({ setModal, cleanData }) => {
    const [loadingG, setLoadingG] = useState(false);
    const { form, formData, updateFormData } = useFormData({});

    const submitForm = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
            <Modal
                closeModal={setModal}
                title={"Cotización"}
                loading={loadingG}
                showCancelBtt={formData}
                cleanData={cleanData}
            >
                <Inputs
                    name="name"
                    label="Nombre o razón social"
                    required={true}
                />
                <Inputs
                    name="nit"
                    label="NIT"
                    required={true}
                />
                <Inputs
                    name="address"
                    label="Dirección"
                    required={true}
                />
                <br />
            </Modal>
        </form>
    );
};

QuotesModal.propTypes = {
    setModal: PropTypes.func,
    refetch: PropTypes.func,
    cleanData: PropTypes.func,
    detail: PropTypes.object,
};

export default QuotesModal;
