import { UPDATE_LANGUAGE } from "../actions/actionTypes"

const initialState = {
    lan: "en"
}

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_LANGUAGE: 
            return{
                ...state,
                lan: action.payload
            }
        default:
            return state
    }
}