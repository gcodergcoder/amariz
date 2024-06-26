import React from "react";

const ButtonIcon = ({icon, onclick, arg=undefined, type="button", bg_color = "white", p="1", css="", text="text-xs", name="" } ) => {
    return (

            <button
                type={type}
                onClick={() => onclick(arg)}
                className={`flex items-center ${css} ${text} mx-1 w-full justify-center transition ease-in-out delay-150 hover:-translate-1 hover:scale-125 duration-300 rounded-md p-${p} bg-${bg_color}`}
            >
                <h6>{icon}</h6>
                <span className="font-thin px-2">{name}</span>

            </button>
    );
};

export { ButtonIcon };
