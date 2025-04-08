import { types } from '../types/types';

// const state = {
//     name: 'Juan Pablo',
//     logged: true
// }

//V-498,paso 3.0
export const authReducer = (state = {}, action) => {

    switch (action.type) {
        //Paso 3.2
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        //Paso 3.3
        case types.logout:
            return {
                logged: false
            }

        default:
            return state;
    }

}