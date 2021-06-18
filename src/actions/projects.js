import { types } from "../types/types";

export const getProjects = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch( greet() )
        })
    }
}

const greet = () => ({
    type: types.getProjects,
    payload: ['Hello', 'Test', 713]
})