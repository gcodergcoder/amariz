import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ProviderProvider = ({ children }) => {
    const [modalClient, setModalClient] = useState(false);
    const [qouteIdClientSel, setQouteIdClientSel] = useState("");
    const [qouteIdAgtSel, seQouteIdAgtSel] = useState("");
    const [viewPDF, setViewPDF] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                modalClient,
                setQouteIdClientSel,
                seQouteIdAgtSel,
                qouteIdClientSel,
                qouteIdAgtSel,
                viewPDF,
                setViewPDF
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
