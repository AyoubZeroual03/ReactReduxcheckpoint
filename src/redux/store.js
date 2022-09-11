import { createStore ,combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import CounterReducer from "./reducers/CounterReducer";
import TitleReducer from "./reducers/TitleReducer";
const reducers=combineReducers({
    CounterReducer,TitleReducer
})
const store =createStore(
    reducers,
    composeWithDevTools()

);
export default store;



