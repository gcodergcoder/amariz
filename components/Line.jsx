import React from "react";

const Line = ({colorDivide = "divide-slate-400"}) => {
    return (
        <div className={`flex flex-col w-full divide-y ${colorDivide}`}>
            <span></span>
            <span></span>
        </div>
    );
};

export { Line };
