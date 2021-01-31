import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import userReducer from '../reducers/user';
import repositoriesReducer from '../reducers/repositories';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            user: userReducer,
            repositories: repositoriesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}
