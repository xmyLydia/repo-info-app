import React from 'react';
import { connect } from 'react-redux';
import { fetchRepository } from '../actions/repositories';
import RepositoryList from './RepositoryList';

const User = (props) => (
    <div>
            <div>
                <h3>userName: {props.user.login}, id: {props.user.id}</h3>
                <a href={props.user.url}>link</a>
                <p>name: {props.user.name}</p>
                <button onClick={() => {
                    localStorage.setItem("counter", 1);
                    props.dispatch(fetchRepository(props.user.login, props.page));
                }}>search repository</button>
                {props.repositories && props.repositories.length > 0 ? (
                    <RepositoryList />
                ) : null}
            </div>

    </div>
);
const mapStateToProps = (state) => {
    return {
        user: state.user,
        repositories: state.repositories,
        page: state.page
    }
};
const mapDispatchToProps = (dispatch) => ({
    fetchRepository: (userName, pageIndex) => dispatch(fetchRepository(userName, pageIndex)),
    dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(User);