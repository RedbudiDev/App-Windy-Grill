import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import LanguageReducer from '../reducers/LanguageReducer';
const rootReducer = combineReducers({
    language: LanguageReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default store;