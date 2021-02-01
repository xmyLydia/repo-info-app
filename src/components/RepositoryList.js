import React from 'react';
import { connect } from 'react-redux';
import RepositoryListItem from './RepositoryListItem';
import { fetchRepository } from '../actions/repositories';


const RepositoryList = (props) => (
    <div>
        <br />
        {props.repositories && props.repositories.length > 0 ? (
            <button onClick={() => {
                const currentIndex = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 1;
                localStorage.setItem('counter', currentIndex + 1);
                props.dispatch(fetchRepository(props.user.login, currentIndex + 1)); //this part need correct state.page
            }}>Load more repository</button>

        ) : null}

        <h1>repository List</h1>
        {props.repositories.map((repository) => {
            return <RepositoryListItem key={repository.id} {...repository} />;
        })}

    </div>
);

const mapStateToProps = (state) => {
    return {
        user: state.user,
        repositories: state.repositories,
        page: state.page
    };
};
const mapDispatchToProps = (dispatch) => ({
    fetchRepository: (userName, pageIndex) => dispatch(fetchRepository(userName, pageIndex)),
    dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
