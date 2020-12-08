import {combineReducers} from "redux";
import {competitionReducer} from "./competition/competitionReducer";

const rootReducer = combineReducers({
    competitions : competitionReducer
});

export default rootReducer;

