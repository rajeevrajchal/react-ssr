import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const clientStore = createStore(
    rootReducer,
    window.INITIAL_STATE,
    composeWithDevTools(applyMiddleware(thunk))
);

export default clientStore
