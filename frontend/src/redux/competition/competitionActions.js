import {FETCH_COMPETITION_REQUEST,
    FETCH_COMPETITION_SUCCESS,
    FETCH_COMPETITION_FAILED,
    FETCH_COMPETITION_URL} from "./competitionTypes";
import axios from 'axios';
export const fetchCompRequest = ()=>{
    return {
        type : FETCH_COMPETITION_REQUEST,
    }
}
export const fetchCompSuccess = (data)=>{
    return {
        type : FETCH_COMPETITION_SUCCESS,
        payload : data
    }
}
export const fetchCompFailed = (err)=>{
    return {
        type : FETCH_COMPETITION_FAILED,
        payload : err
    }
}

//sideEffects

export const fetchCompetitions = ()=>{
    return (dispatch)=>{
        dispatch(fetchCompRequest);
        axios.get(FETCH_COMPETITION_URL).then((res)=>{
            const data = res.data.competitions;
            console.log(data);
            dispatch(fetchCompSuccess(data));

        }).catch((err)=>{
            const errMsg = err.message;
            dispatch(fetchCompFailed(errMsg));
        })
    }
}