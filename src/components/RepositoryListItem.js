import React from 'react';

const RepositoryListItem = ({ id, full_name, name, description }) => (
    <div>

        <h3>{description}</h3>
        <h4>{full_name}</h4>
        <p>{name}</p>
        <p>{description}</p>
    </div>
);

export default RepositoryListItem;
