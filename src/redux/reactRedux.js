import {createStore, combineReducers} from 'redux';
import reducerInfo from "./reducerInfo";
import reducerMessage from "./reducerMessage";

let red = combineReducers({
    info: reducerInfo,
    message: reducerMessage,
});

let store = createStore();

export default store;