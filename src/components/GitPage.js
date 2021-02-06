import React from 'react';
import GitForm from './GitForm';
import { fetchUser } from '../actions/user';
import { connect } from 'react-redux';

const GitPage = (props) => (
    <div>
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
export default connect(mapDispatchToProps)(GitPage);

