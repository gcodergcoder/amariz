import React from "react";
import  {loadingIcon}  from "../utlis/icons";
import PropTypes from "prop-types";

const ButtonLoading = ({ type, name, loading, loadinName= "Guardando...", bg="bg-amariz_6" }) => {
    //loading => usar este estado para mostrar icono de espera
    return (
            <button
                className={`flex mr-0.5 px-5 py-2 items-center justify-center text-white rounded-lg font-bold text-sm ${bg}`}
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

ButtonLoading.propTypes = {
    type: PropTypes.string,
    loading: PropTypes.bool,
    name: PropTypes.string,
    loadinName: PropTypes.string,
    bg: PropTypes.string,
};


export { ButtonLoading };
