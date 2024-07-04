import React from "react";
import PropTypes from "prop-types";

const ButtonIcon = ({
    Icon,
    onclick,
    arg = undefined,
    type = "button",
    bg_color = "white",
    css = "w-full p-1 mx-2",
    text = "text-xs",
    name = "",
    colorIcon="#000000",
    ziseIcon="12px"
}) => {
    return (
        <button
            type={type}
            onClick={() => onclick(arg)}
            className={`flex items-center ${css} ${text} mx-1 justify-center transition ease-in-out delay-150 hover:-translate-1 hover:scale-125 duration-300 rounded-md bg-${bg_color}`}
        >
            <Icon colorIcon={colorIcon} ziseIcon={ziseIcon} />
            {name.length > 0 ? <span className="font-thin px-2">{name}</span> : <></>}
        </button>
    );
};

ButtonIcon.propTypes = {
    Icon: PropTypes.elementType,
    onclick: PropTypes.func,
    arg: PropTypes.any,
    type: PropTypes.string,
    bg_color: PropTypes.string,
    p: PropTypes.string,
    css: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
};

export { ButtonIcon };
