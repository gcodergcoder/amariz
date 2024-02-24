import React from "react";

const ButtonGeneral = ({ name, setValue, value, color = "bg-amariz_6", text_color = "text-white" } ) => {
    return (
        <div className="flex justify-center mx-1">
            <button
                onClick={() => setValue(value)}
                className={`flex mx-0.5 items-center font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl px-4 ml-2 ${color} ${text_color}`}
            >
                {name}
            </button>
        </div>
    );
};

export { ButtonGeneral };
