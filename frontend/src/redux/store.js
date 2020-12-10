import {createStore,applyMiddleware} from 'redux'
import rootReducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;