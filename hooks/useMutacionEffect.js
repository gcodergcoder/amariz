import { toast } from 'react-toastify';


const successAlert = (succes = "!Registro Guardado!") => {
    toast(succes);
};

const errorAlert = (
    error = "¡Ha ocurrido un error, intente de nuevo!"
) => {
    toast.error(error);
};

const useMutationEfecct = () => {

    const mutationEffect = (data, error, refetch) => {
        if (data) {
            refetch();
            successAlert();
        }
        if (error) {
            errorAlert();
        }
    };

    return { mutationEffect };
};

export default useMutationEfecct;
