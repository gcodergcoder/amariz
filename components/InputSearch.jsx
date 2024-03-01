import React from "react";

const InputSearch = ({onchange}) => {
    return (
        <input
            type="text"
            className="h-full rounded bg-gray-100 px-10 w-full mx-2 focus:outline-0"
            placeholder="Buscar..."
            onChange={(e) => {
                onchange(e);
            }}
        />
    );
};

export default InputSearch;
