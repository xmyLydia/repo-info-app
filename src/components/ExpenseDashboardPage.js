import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
import { fetchUser } from '../actions/user';
import { connect } from 'react-redux';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpensesList />

    </div>
);
const mapDispatchToProps = (dispatch) => ({
    fetchUser: (user) => dispatch(fetchUser(user))
});
export default connect(mapDispatchToProps)(ExpenseDashboardPage);

