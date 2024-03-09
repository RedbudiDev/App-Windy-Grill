import { UPDATE_TOKEN } from "../actions/actionTypes"

const initialState = {
    token: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_TOKEN: 
            return{
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}