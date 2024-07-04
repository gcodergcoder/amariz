const useParseDate = () => {
    const parseDate = (date) => {
        let date_ = Date(Date.parse(date)).toString()
        const meses = { jan: "Enero", feb: "Febrero", mar: "Marzo", apr: "Abril", may: "Mayo", jun: "Junio", jul: "Julio", aug: "Agosto", sep: "Septiembre", oct: "Octubre", nov: "Noviembre", dec: "Diciembre" }
        let mes_ = ""
        Object.keys(meses).map((mes) => {
            if (date_.slice(4, 7).toLowerCase() === mes) {
                mes_ = meses[mes]
            }
        })
        mes_ = mes_ + ", " + date_.slice(8, 10) + " de " + date_.slice(11, 15)
        return mes_
    };
    return { parseDate };
};

export default useParseDate;
