import React from "react";
import PropTypes from "prop-types";

const Points = ({ color = "#000000", size = "15px" }) => {
    return (
        <svg
            width={size}
            height={size}
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-138.24 -138.24 788.48 788.48"
            fill={color}
            stroke={color}
            strokeWidth="0.00512"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <style type="text/css"> </style>
                <g>
                    <circle
                        className="st0"
                        cx="55.091"
                        cy="256"
                        r="55.091"
                    ></circle>
                    <circle
                        className="st0"
                        cx="256"
                        cy="256"
                        r="55.091"
                    ></circle>
                    <circle
                        className="st0"
                        cx="456.909"
                        cy="256"
                        r="55.091"
                    ></circle>
                </g>
            </g>
        </svg>
    );
};

Points.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
};

export default Points;
