import React from "react";
import PropTypes from "prop-types";
import { ButtonLoading } from "../../components/ButtonLoading";
import { isEmpty } from "class-validator";

const Modal = ({children, title, loading, closeModal, showCancelBtt, cleanData}) => {

    const closeModalF = () =>{
        cleanData({})
        closeModal(false)
    }
    return (
        <div className="overflow-x-hidden overflow-y-auto backdrop-blur-xs bg-gray-200/30 fixed h-modal left-0 right-0 z-50 justify-center items-center">
            <div className="flex items-center justify-center h-screen">
            <div className="relative w-full max-w-md px-4 h-auto">
                <div className="rounded-lg bg-white shadow relative">
                    <div className="relative flex p-5 border-b rounded-t">
                        <h3 className="text-gray-900 px-5 text-lg font-semibold w-full text-center uppercase">
                            <span>{title}</span>
                        </h3>
                        <button
                            type="button"
                            className="absolute right-2 top-1 text-gray-400 bg-transparentrounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            onClick={()=>{closeModalF()}}
                        >
                            x
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        {children}
                    </div>
                    <div className="flex space-x-2 justify-end py-4 px-8 border-t border-gray-200 rounded-lg">
                        {JSON.stringify(showCancelBtt) == "{}" ? <></>  :
                        <ButtonLoading
                            name="Guardar"
                            loading={loading}
                            type="submit"
                        >
                            Guardar
                        </ButtonLoading>
                    }
                        <button
                            onClick={()=>{closeModalF()}}
                            type="button"
                            className="bg-gray-200 mr-0.5 px-5 py-2 items-center justify-center rounded-lg font-bold text-sm"
                        >Cancelar
                        </button>
                    </div>
                </div>
            </div>
                </div>
        </div>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    loading: PropTypes.bool,
    closeModal: PropTypes.func,
    showCancelBtt: PropTypes.object,
    cleanData: PropTypes.func
};

export default Modal;
