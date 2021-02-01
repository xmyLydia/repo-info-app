import React from 'react';
import User from './User';
import axios from 'axios';

export default class GitForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: props.user ? props.user.login : '', //actually is user name
            error: '',
            page: 1
        };
    }


    onLoginChange = (e) => {
        const login = e.target.value;
        this.setState(() => ({ login }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.login) {
            this.setState(() => ({ error: 'Please provide user name.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit(this.state.login); // fetch user
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="User name"
                        autoFocus
                        value={this.state.login}
                        onChange={this.onLoginChange}
                    />

                    <button>Search user</button>
                </form>
                <User />
            </div>
        )
    }
}
