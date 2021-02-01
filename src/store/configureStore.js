import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import userReducer from '../reducers/user';
import repositoriesReducer from '../reducers/repositories';
import pageReducer from '../reducers/page';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            user: userReducer,
            repositories: repositoriesReducer,
            page: pageReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}
