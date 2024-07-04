import React from "react";
import PropTypes from "prop-types";

const PlusPeople = ({ color = "#000000", size = "15px" }) => {
    return (
        <svg
            fill="none"
            height={size}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="20" x2="20" y1="8" y2="14" />
            <line x1="23" x2="17" y1="11" y2="11" />
        </svg>
    );
};

PlusPeople.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
};

export default PlusPeople;
