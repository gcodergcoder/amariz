import React from "react";

const Inputs = ({ name, label, required = false, placeholder, defaultValue=null }) => {
    return (
        <div className="flex items-center justify-between my-1 px-3">
            <div className="relative flex flex-col w-full pb-2">
                <label className="absolute -top-2 left-0 text-xxs text-amariz_4 font-semibold items-left mr-4 bg-white px-4">
                    {label}
                </label>
                <div className="w-full">
                    <input
                        defaultValue={defaultValue}
                        name={name}
                        required={required}
                        placeholder={placeholder}
                        className="h-12 rounded-lg font-light text-md text-gray-500 border w-full px-5 focus:outline-0 focus:border-visa_8 capitalize"
                    />
                </div>
            </div>
        </div>
    );
};

export { Inputs };
