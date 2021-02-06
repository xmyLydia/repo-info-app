import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
    <header>
        <h1>Git information</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home page</NavLink>
        <NavLink to="/create" activeClassName="is-active">create page</NavLink>
        <NavLink to="/git" activeClassName="is-active" exact={true}>Git page</NavLink>
        <NavLink to="/help" activeClassName="is-active">help page</NavLink>
        <button  onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header); 