import React from "react";

const ButtonIcon = ({icon, onclick, arg=undefined, type="button", bg_color = "white", p="1", css="" } ) => {
    return (

            <button
                type={type}
                onClick={() => onclick(arg)}
                className={`flex items-center mx-1 justify-center transition ease-in-out delay-150 hover:-translate-1 hover:scale-125 duration-300 rounded-md p-${p} ${css} bg-${bg_color}`}
            >
               {icon}
            </button>
    );
};

export { ButtonIcon };
