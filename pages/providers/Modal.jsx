import React from "react";
import { close } from "../../utlis/icons";
import { ButtonLoading } from "../../components/ButtonLoading";

const Modal = ({children, title, loading, closeModal, showCancelBtt, cleanData}) => {
    const closeModalF = () =>{
        cleanData(null)
        closeModal(false)
    }
    return (
        <div className="overflow-x-hidden overflow-y-auto backdrop-blur-xs bg-gray-200/30 fixed h-modal left-0 right-0 z-50 justify-center items-center">
            <div className="flex items-center justify-center h-screen">
            <div className="relative w-full max-w-md px-4 h-auto">
                <div className="rounded-lg bg-white shadow relative">
                    <div className="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 className="text-gray-900 px-5 pt-2 text-lg font-semibold">
                            {title}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparentrounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-toggle="default-modal"
                            onClick={()=>{closeModalF()}}
                        >
                            {close}
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        {children}
                    </div>
                    <div className="flex space-x-2 justify-end p-4 border-t border-gray-200 rounded-b">
                        { Object.keys(showCancelBtt).length  != 0 ?  <ButtonLoading
                            name="Guardar"
                            loading={loading}
                            type="submit"
                        >
                            Guardar
                        </ButtonLoading>  : <></> }
                        <button
                            onClick={()=>{closeModalF()}}
                            type="button"
                            className="bg-gray-200 mr-0.5 px-5 py-2 items-center justify-center rounded-2xl font-bold text-sm"
                        >Cancelar
                        </button>
                    </div>
                </div>
            </div>
                </div>
        </div>
    );
};

export default Modal;
