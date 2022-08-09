import { createStore, combineReducers, applyMiddleware, } from "redux";
import thunk from 'redux-thunk'

const configureStore = () => {
    const state = createStore(combineReducers({
      count:0
    }),applyMiddleware(thunk))
    return state
}

export default configureStore