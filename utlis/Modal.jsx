import React from "react";
import { close } from "./icons";

const Modal = ({ children, closeModal }) => {
    return (
        <div className="absolute flex justify-center items-center w-full h-screen bg-black bg-opacity-30 backdrop-blur-md">
        <div className="fixed inset-0 z-50 w-full flex justify-center items-center">
            <div className="bg-white rounded-lg">
                <button className="flex justify-end w-full px-4 py-2" onClick={()=>{closeModal(false)}}>
                    {close}
                </button>
                {children}
            </div>
        </div>
        </div>
);
};


export { Modal };
