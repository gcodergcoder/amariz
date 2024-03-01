import React from "react";

const ButtonGeneral = ({ name, setValue, value, color = "bg-gray-400", text_color = "text-white" } ) => {
    return (
        <div className={`flex px-3 mx-1 items-center justify-center text-white rounded-lg font-bold text-sm ${color} ${text_color}`}>
            <button
                onClick={() => setValue(value)}
                className={`flex items-center font-semibold py-1 ${color} ${text_color}`}
            >
                {name}
            </button>
        </div>
    );
};

export { ButtonGeneral };
