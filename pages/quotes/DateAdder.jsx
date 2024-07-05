import React, { useState, useEffect } from "react";
import { ButtonIcon } from "../../components/ButtonIcon";
import { UPDATE_QOUTES } from "@/graphql/qoutes/mutation";
import Check from "../../utlis/Icons/Check";
import { useMutation } from "@apollo/client";
import useMutacionEffect from "@/hooks/useMutacionEffect";

const DateAdder = ({ initialDate, setNewDate, idQoute, refetch }) => {
    const [daysToAdd, setDaysToAdd] = useState(0);
    const { mutationEffect } = useMutacionEffect(null);
    const [update, { data, error, loading }] =
        useMutation(UPDATE_QOUTES);

    const handleDaysChange = (e) => {
        setDaysToAdd(parseInt(e.target.value, 10));
    };

    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + (days + 1));
        return result;
    };

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const resultDate = addDays(new Date(initialDate), daysToAdd);
        setNewDate(formatDate(resultDate));
        console.log('resultDate :', resultDate);
        console.log('idQoute :', idQoute);
        update({
            variables: {
                data: {
                    expireAt: {
                        set: resultDate,
                    },
                },
                where: {
                    id: idQoute,
                },
            },
        });
    };


    useEffect(() => {
        if (data || error) {
            mutationEffect(data, error, refetch);
        }
    }, [data, error]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <label>
                        <span className="font-semibold mr-2">
                            Días a agregar:
                        </span>
                        <input
                            className="w-10"
                            type="number"
                            value={daysToAdd}
                            onChange={handleDaysChange}
                        />
                    </label>
                    <ButtonIcon
                        css="mx-4"
                        Icon={Check}
                        type="submit"
                        onclick={() => {}}
                    />
                </div>
            </form>
        </div>
    );
};

export default DateAdder;
