import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import reducer from "../../src/store/reducer";

export default () => {
    return createStore(reducer, {}, composeWithDevTools(applyMiddleware(thunk)));
}
