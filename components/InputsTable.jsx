import React from "react";

const InputsTable = ({ name, label, required = false, placeholder, defaultValue=null }) => {
    return (
        <div className="flex items-center justify-between my-1 px-3 pl-[120px] border-r-[1px]">
            <div className="relative flex flex-col w-full">
                <div className="w-full">
                    <input
                        defaultValue={defaultValue}
                        name={name}
                        required={required}
                        placeholder={placeholder}
                        className="rounded-lg font-light text-md text-gray-500 border w-full px-5 py-1 focus:outline-0 focus:border-visa_8 capitalize"
                    />
                </div>
            </div>
        </div>
    );
};

export { InputsTable };
