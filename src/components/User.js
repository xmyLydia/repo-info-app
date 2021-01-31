import React from 'react';
import { connect } from 'react-redux';
import { fetchRepository } from '../actions/repositories';

const User = (props) => (
    <div>
        {props.user.id ? (
            <div>
                <h3>userName: {props.user.login}, id: {props.user.id}</h3>
                <a href={props.user.url}>link</a>
                <p>name: {props.user.name}</p>
                <button onClick={() => {
                    props.dispatch(fetchRepository(props.user.login));
                }}>search repository</button>
            </div>
        )
            : <p>Please input existing user name</p>}

    </div>
);
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
const mapDispatchToProps = (dispatch) => ({
    fetchRepository: (repository) => dispatch(fetchRepository(repository))
});
export default connect(mapStateToProps, mapDispatchToProps)(User);