import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Git information extend</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home page</NavLink>
        <NavLink to="/create" activeClassName="is-active">create page</NavLink>
        <NavLink to="/help" activeClassName="is-active">help page</NavLink>
    </header>
);
export default Header;