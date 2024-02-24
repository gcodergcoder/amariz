import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ProviderProvider = ({ children }) => {
    const [modalProvider, setModalProvider] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                modalProvider
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
