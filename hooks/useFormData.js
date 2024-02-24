import { useRef, useState } from "react";

const useFormData = (initial) => {
  const form = useRef(initial);
  const [formData, setFormData] = useState({});
  const getFormData = (k) => {
    const fd = new FormData(form.current);
    const obj = {};
    fd.forEach((value, key) => {
      obj[key] = value;
    });

    return obj;
  };
  const updateFormData = (k) => {
    setFormData(getFormData(k));
  };
  return { form, formData, updateFormData };
};

export default useFormData;
