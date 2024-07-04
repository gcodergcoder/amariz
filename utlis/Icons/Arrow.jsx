import React from "react";
import PropTypes from "prop-types";

const Arrow = ({ color = "#000000", size = "15px" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
};

Arrow.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
};

export default Arrow;
