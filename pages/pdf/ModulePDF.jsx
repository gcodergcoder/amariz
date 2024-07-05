import React from "react";
import { PDFObject } from "react-pdfobject";

const ModulePDF = ({url}) => {
    return (
        <PDFObject
            url={url}
            width="100%"
            height="2000px"
        />
    );
};

export default ModulePDF;
