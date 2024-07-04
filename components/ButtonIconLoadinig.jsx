import React from "react";
import { loadingP_icons } from "../utlis/icons";

const ButtonIconLoadinig = ({icon, type="button", loading, onclick, arg=undefined, bg_color = "white", p="1", css="" } ) => {
    return (

            <button
                type={type}
                onClick={() => onclick()}
                className={`flex items-center mx-1 justify-center transition ease-in-out delay-150 hover:-translate-1 hover:scale-125 duration-300 rounded-md p-${p} ${css} bg-${bg_color}`}
            >
            {loading ? loadingP_icons() : icon}
            </button>
    );
};

export { ButtonIconLoadinig };
