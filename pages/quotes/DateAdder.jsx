import React, { useState } from "react";
import { ButtonIcon } from "../../components/ButtonIcon";
import Check from "../../utlis/Icons/Check";

const DateAdder = ({ initialDate, setNewDate }) => {
    const [daysToAdd, setDaysToAdd] = useState(0);

    const handleDaysChange = (e) => {
        setDaysToAdd(parseInt(e.target.value, 10));
    };

    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + (days+1));
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
    };

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
