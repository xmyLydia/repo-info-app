import React from 'react';
import { connect } from 'react-redux';
import RepositoryListItem from './RepositoryListItem';

const RepoList = (props) => (
    <div>
        <h1>repository List</h1>
        {props.repositories.map((repository) => {
            return <RepositoryListItem key={repository.id} {...repository} />;
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        repositories: state.repositories
    };
};

export default connect(mapStateToProps)(RepoList);
