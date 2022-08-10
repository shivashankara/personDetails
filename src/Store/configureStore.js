import {createStore,combineReducers,applyMiddleware} from 'redux';
import personReducers from '../Reducer/personReducer';

import thunk from 'redux-thunk'

const configureStore = () => {
    const state = createStore(combineReducers({
      users:personReducers,
    }),applyMiddleware(thunk))
    return state
}

export default configureStore