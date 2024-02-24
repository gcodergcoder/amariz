import React from "react";
import { ProviderProvider } from "../context/useGlobalsContext";
import { AlertProvider } from "../context/useAlertsContext";
import { ToastContainer } from "react-toastify";

const Layouth = ({ children }) => {
    return (
        <ProviderProvider>
            <AlertProvider>
                {/* <div className="flex items-center justify-center px-4 overflow-y-auto w-full"> */}

                    {children}
                    <ToastContainer/>

            </AlertProvider>
        </ProviderProvider>
    );
};

export { Layouth };
