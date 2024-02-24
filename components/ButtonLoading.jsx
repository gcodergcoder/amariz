import React from "react";
import  {loadingIcon}  from "../utlis/icons";

const ButtonLoading = ({ type, name, onClick, loading, loadinName= "Guardando...", bg="bg-amariz_6" }) => {
    //loading => usar este estado para mostrar icono de espera
    return (
            <button
                onClick={onClick}
                className={`flex mr-0.5 px-5 py-2 items-center justify-center text-white rounded-2xl font-bold text-sm ${bg}`}
                type={type}
            >
                <div className="flex">
                    {loading ? loadingIcon : (
                        <></>
                    )}
                    {loading ? <span>{loadinName}</span> : <span>{name}</span>}
                </div>
            </button>
    );
};

export { ButtonLoading };
