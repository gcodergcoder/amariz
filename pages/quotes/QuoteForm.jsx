import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import Modal from "../../components/Modal";
import { CREATE_QOUTES } from "@/graphql/qoutes/mutation";
import { GlobalContext } from "@/context/useGlobalsContext";
import Select from "./SelectClient";
import Link from "next/link";
import useMutacionEffect from "@/hooks/useMutacionEffect";

const QuoteForm = ({ setModal, cleanData, refetch }) => {
    const [loadingG, setLoadingG] = useState(false);
    const [data, setData] = useState({});
    const { qouteIdAgtSel, qouteIdClientSel } = useContext(GlobalContext);
    const { mutationEffect } = useMutacionEffect(null);
    const [create, { data: dataCreate, error: errorCreate }] =
        useMutation(CREATE_QOUTES);

    console.log("formdata :", dataCreate);

    const submitForm = (e) => {
        e.preventDefault();
        setLoadingG(true);
        create({
            variables: {
                data: {
                    provider: {
                        connect: {
                            id: data.idClient,
                        },
                    },
                    agentProvider: {
                        connect: {
                            id: data.idAgent,
                        },
                    },
                },
            },
        });
    };

    useEffect(() => {
        if (qouteIdAgtSel) {
            setData({ idAgent: qouteIdAgtSel, idClient: qouteIdClientSel });
        }
    }, [qouteIdAgtSel]);

    useEffect(() => {
        if (dataCreate || errorCreate) {
            setModal(false);
            mutationEffect(dataCreate, errorCreate, refetch);
        }
    }, [dataCreate, errorCreate]);

    return (
        <form onSubmit={submitForm}>
            <Modal
                closeModal={setModal}
                title={"Selecciona un cliente"}
                loading={loadingG}
                showCancelBtt={data}
                cleanData={cleanData}
            >
                <div className="mr-4">
                    <Select defaulProvider={"Selecciona..."} />
                </div>
                <p className="text-center">
                    ¿No está el cliente?{" "}
                    <Link className="underline" href="/client">
                        crear nuevo
                    </Link>{" "}
                </p>
            </Modal>
        </form>
    );
};

QuoteForm.propTypes = {
    setModal: PropTypes.func,
    refetch: PropTypes.func,
    cleanData: PropTypes.func,
    detail: PropTypes.object,
};

export default QuoteForm;
