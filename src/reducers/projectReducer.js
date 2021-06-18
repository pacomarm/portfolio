import { types } from "../types/types";
// {
//     projects: [
//         {
//             name: 'dfs',
//             desc: 'sdfsdfsdfs',
//             link: 'www.google.com'
//         }
//     ]
// }

const initialState = {
    projects: []
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getProjects:
            return{
                projects: [...action.payload]
            }
    
        default:
            return state;
    }
}