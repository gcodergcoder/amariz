import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ProviderProvider = ({ children }) => {
    const [modalProvider, setModalProvider] = useState(false);
    const [qouteIdPvdSel, seQouteIdPvdSel] = useState("");
    const [qouteIdAgtSel, seQouteIdAgtSel] = useState("");
    


    return (
        <GlobalContext.Provider
            value={{
                modalProvider,
                seQouteIdPvdSel,
                seQouteIdAgtSel,
                qouteIdPvdSel,
                qouteIdAgtSel
                
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
