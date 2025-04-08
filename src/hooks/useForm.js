import { useState } from 'react';

//Paso 2.13
export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [values, handleInputChange, reset];

}