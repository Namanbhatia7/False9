import {FETCH_COMPETITION_REQUEST,FETCH_COMPETITION_SUCCESS, FETCH_COMPETITION_FAILED } from "./competitionTypes"

const initialCompState = {
    loading : false,
    data : [],
    error : ''
};
export const competitionReducer = (state = initialCompState,action)=>{
    switch(action.type) {
        case FETCH_COMPETITION_REQUEST :
            return {
                ...state, loading: true
            }
        case FETCH_COMPETITION_SUCCESS :
            return {
                ...state,
                loading: false,
                data:action.payload
            }
        case FETCH_COMPETITION_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}