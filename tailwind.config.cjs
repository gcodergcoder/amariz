/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                xxs: [
                    "0.7rem",
                    {
                        lineHeight: "1rem",
                    },
                ],
            },
            colors: {
                amariz_1: "#548FB2",
                amariz_2: "#3D618D",
                amariz_3: "#2C346A",
                amariz_4: "#39275F",
                amariz_5: "#7D2462",
                amariz_6: "#C62266",
            },
            fontFamily: {
                inria: "'Inria Sans', sans-serif",
            },
            width: {
                "1/24": "4.166666666666666%",
                "2/24": "8.333333333333332%",
                "3/24": "12.5%",
                "4/24": "16.666666666666664%",
                "5/24": "20.833333333333336%",
                "6/24": "25.0%",
                "7/24": "29.166666666666668%",
                "8/24": "33.33333333333333%",
                "9/24": "37.5%",
                "10/24": "41.66666666666667%",
                "11/24": "45.83333333333333%",
                "12/24": "50.0%",
                "13/24": "54.166666666666664%",
                "14/24": "58.333333333333336%",
                "15/24": "62.5%",
                "16/24": "66.66666666666666%",
                "17/24": "70.83333333333334%",
                "18/24": "75.0%",
                "19/24": "79.16666666666666%",
                "20/24": "83.33333333333334%",
                "21/24": "87.5%",
                "22/24": "91.66666666666666%",
                "23/24": "95.83333333333334%",
            },
            height: {
                "1/24": "4.166666666666666%",
                "1.5/24": "6.25%",
                "2/24": "8.333333333333332%",
                "3/24": "12.5%",
                "4/24": "16.666666666666664%",
                "5/24": "20.833333333333336%",
                "6/24": "25.0%",
                "7/24": "29.166666666666668%",
                "8/24": "33.33333333333333%",
                "9/24": "37.5%",
                "10/24": "41.66666666666667%",
                "11/24": "45.83333333333333%",
                "12/24": "50.0%",
                "13/24": "54.166666666666664%",
                "14/24": "58.333333333333336%",
                "15/24": "62.5%",
                "16/24": "66.66666666666666%",
                "17/24": "70.83333333333334%",
                "18/24": "75.0%",
                "19/24": "79.16666666666666%",
                "20/24": "83.33333333333334%",
                "21/24": "87.5%",
                "22/24": "91.66666666666666%",
                "23/24": "95.83333333333334%",
            },
            animation: {
                racho: "wiggle 1s ease-in-out infinite",
            },
            borderWidth: {
                "-0.5": "0.3px",
                "-0.3": "0.2px",
            },
            backgroundImage: {
                "icons-img": "url('https://i.redd.it/qwd83nc4xxf41.jpg')",
                },
            keyframes: {
                bounce_horizontal: {
                    "0%, 100%": {
                        transform: "translateX(-75%)",
                        "animation-timing-function":
                            "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateY(0)",
                        "animation-timing-function":
                            "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
            },
            animation: {
                bounce_horizontal: "bounce_horizontal 1s ease-in-out infinite",
            },
            backdropBlur: {
                xs: '2px',
              }
        },
    },
    plugins: [],
};