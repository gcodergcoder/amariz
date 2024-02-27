const useParsePrice = () => {
    const parcePrice = (value) => {

        function reverseString(str) {
            return str.split("").reduce((x, y) => y + x);
        }
        let result = "";
        let rev = "";
        const numero_decimal = value?.toString().split(".");
        rev = reverseString(numero_decimal[0]);
        for (let i = 0; i < rev.length; i++) {
            result = result + rev[i];
            if (i == 2) {
                result = result + ".";
            } else if (i == 5) {
                result = result + ".";
            } else if (i == 8) {
                result = result + ".";
            } else if (i == 11) {
                result = result + ".";
            } else if (i == 14) {
                result = result + ".";
            }
        }
        return "$"+reverseString(result)+","+numero_decimal[1].slice(0,2)
        
    };
    return { parcePrice };
};

export default useParsePrice;
