import React from 'react';

const RepositoryListItem = ({ id, full_name, name, description }) => (
    <div>
        <h4>{full_name}</h4>
        <p>{name}</p>
        <p>{description}</p>
    </div>
);

export default RepositoryListItem;
