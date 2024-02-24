import { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AlertContext = createContext();

export const successAlert = (succes = "!Sincronización exitosa!") => {
    toast.success(succes);
};

export const errorAlert = (
    error = "¡Ha ocurrido un error al intentar realizar esta operación!"
) => {
    toast.error(error);
};

export const AlertProvider = ({ children }) => {
    const [alertError, setAlertError] = useState("");
    const [alertSucess, setAlertSucess] = useState("");

    useEffect(() => {
        if (alertError) {
            toast.error(alertError);
            setAlertError("");
        }
    }, [alertError]);

    useEffect(() => {
        if (alertSucess) {
            toast.success(alertSucess);
            setAlertSucess("");
        }
    }, [alertSucess]);

    return (
        <AlertContext.Provider
            value={{ setAlertError, setAlertSucess, alertSucess, alertError }}
        >
            <ToastContainer />
            {children}
        </AlertContext.Provider>
    );
};
