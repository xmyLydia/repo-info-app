import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
import { fetchUser } from '../actions/user';
import { connect } from 'react-redux';
import ExpensesSummary from '../components/ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpensesList />

    </div>
);
const mapDispatchToProps = (dispatch) => ({
    fetchUser: (user) => dispatch(fetchUser(user))
});
export default connect(mapDispatchToProps)(ExpenseDashboardPage);

