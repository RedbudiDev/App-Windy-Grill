import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AuthReducer from '../reducers/AuthReducer';
import LanguageReducer from '../reducers/LanguageReducer';
const rootReducer = combineReducers({
    language: LanguageReducer,
    auth: AuthReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default store;