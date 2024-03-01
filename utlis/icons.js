const zise = "20px";

export const save_icons = (color = "#000000", size = "15px") => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M15 20V15H9V20M18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H14.1716C14.702 4 15.2107 4.21071 15.5858 4.58579L19.4142 8.41421C19.7893 8.78929 20 9.29799 20 9.82843V18C20 19.1046 19.1046 20 18 20Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </g>
        </svg>
    );
};

export const edit_icons = (color = "#000000", size = "15px") => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.9445 9.1875L14.9445 5.1875M18.9445 9.1875L13.946 14.1859C13.2873 14.8446 12.4878 15.3646 11.5699 15.5229C10.6431 15.6828 9.49294 15.736 8.94444 15.1875C8.39595 14.639 8.44915 13.4888 8.609 12.562C8.76731 11.6441 9.28735 10.8446 9.946 10.1859L14.9445 5.1875M18.9445 9.1875C18.9445 9.1875 21.9444 6.1875 19.9444 4.1875C17.9444 2.1875 14.9445 5.1875 14.9445 5.1875M20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12C3.5 5.5 5.5 3.5 12 3.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const xmark_icons = (color = "#000000", size = "12px") => {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289Z"
                    fill={color}
                ></path>
            </g>
        </svg>
    );
};

export const plus_people = (
    <svg
        viewBox="0 0 24 24"
        width={zise}
        height={zise}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <g id="Edit / Add_Plus_Circle">
                <path
                    id="Vector"
                    d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </g>
        </g>
    </svg>
);

export const close = (
    <svg
        viewBox="0 0 24.00 24.00"
        width={zise}
        height={zise}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            {" "}
            <path
                d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
            ></path>
            <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
            ></path>
        </g>
    </svg>
);

export const trash = (
    <svg
        viewBox="0 0 24 24"
        width={zise}
        height={zise}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            {" "}
            <path
                d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
            ></path>{" "}
            <path
                d="M20.5001 6H3.5"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
            ></path>{" "}
            <path
                d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
            ></path>{" "}
            <path
                d="M9.5 11L10 16"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
            ></path>{" "}
            <path
                d="M14.5 11L14 16"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
            ></path>
        </g>
    </svg>
);

export const point = (
    <svg
        width={zise}
        height={zise}
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-138.24 -138.24 788.48 788.48"
        fill="#000000"
        stroke="#000000"
        strokeWidth="0.00512"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            {" "}
            <style type="text/css"> </style>{" "}
            <g>
                {" "}
                <circle
                    className="st0"
                    cx="55.091"
                    cy="256"
                    r="55.091"
                ></circle>{" "}
                <circle className="st0" cx="256" cy="256" r="55.091"></circle>{" "}
                <circle
                    className="st0"
                    cx="456.909"
                    cy="256"
                    r="55.091"
                ></circle>{" "}
            </g>{" "}
        </g>
    </svg>
);

export const expand = (
    <svg
        viewBox="0 0 24 24"
        width={zise}
        height={zise}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            {" "}
            <path
                d="M21 14V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H14M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10M15 9L21 3M21 3H15M21 3V9M9 15L3 21M3 21H9M3 21L3 15"
                stroke="#000000"
                strokeWidth="0.8399999999999999"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>{" "}
        </g>
    </svg>
);

export const addUser = (
    <svg
        className="feather feather-user-plus"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" x2="20" y1="8" y2="14" />
        <line x1="23" x2="17" y1="11" y2="11" />
    </svg>
);

export const loadingIcon = (
    <svg
        aria-hidden="true"
        className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
        />
        <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
        />
    </svg>
);
export const loadingP_icons = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
        >
            <circle cx="18" cy="12" r="0" fill="currentColor">
                <animate
                    attributeName="r"
                    begin=".67"
                    calcMode="spline"
                    dur="1.5s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                />
            </circle>
            <circle cx="12" cy="12" r="0" fill="currentColor">
                <animate
                    attributeName="r"
                    begin=".33"
                    calcMode="spline"
                    dur="1.5s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                />
            </circle>
            <circle cx="6" cy="12" r="0" fill="currentColor">
                <animate
                    attributeName="r"
                    begin="0"
                    calcMode="spline"
                    dur="1.5s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                />
            </circle>
        </svg>
    );
};

export const arrow = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={zise}
        height={zise}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
        />
    </svg>
);

export default edit_icons;
