import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense, startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>add expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(startAddExpense(expense));
            props.history.push('/');
        }} />
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(addExpense(expense))
});
export default connect(mapDispatchToProps)(AddExpensePage);