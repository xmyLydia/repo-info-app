import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
import GitForm from './GitForm';
import { fetchUser } from '../actions/user';
import { connect } from 'react-redux';

const ExpenseDashboardPage = (props) => (
    <div>
        {/* <ExpenseListFilters />
        <ExpensesList /> */}
        <GitForm
            onSubmit={(user) => {
                props.dispatch(fetchUser(user));
            }}
        />
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    fetchUser: (user) => dispatch(fetchUser(user))
});
export default connect(mapDispatchToProps)(ExpenseDashboardPage);

