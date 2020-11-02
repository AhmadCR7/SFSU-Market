import React from 'react';
import { connect } from 'react-redux';
import { setUser, setPassword, setIsLoggedIn, setLoadingState } from '../../Redux/actions/userActions';
import { Redirect } from 'react-router-dom';
import "./login.css"
import { Button } from "react-bootstrap";

const Login = ({
    user,
    password,
    isLoggedIn,
    loadingState,
    dispatch,
}) => {
    const logIn = () => {
        dispatch(setLoadingState('loading'));
        setTimeout(() => { // network call would be here (axios or fetch)
            // fake doing something on the server
            if (user === 'Ahmad' && password === '123') {
                dispatch(setIsLoggedIn(true));
                dispatch(setLoadingState('init'));
            } else {
                dispatch(setLoadingState('error'));
            }
        }, 2000);
    };

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    if (loadingState === 'loading') {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name='form'>
                <div className="form-group" >
                    <input className="form-simple"
                        type="text"
                        placeholder="username"
                        value={user}
                        onChange={e => dispatch(setUser(e.target.value))}

                    />
                    <small id="usernameHelp" class="form-text text-muted">we are using mockdata data username is: Ahmad password is: 123</small>
                </div>

                <div className="form-group">
                    <input
                        type="password"

                        placeholder="password"
                        value={password}
                        onChange={e => dispatch(setPassword(e.target.value))}
                    />

                </div>
                <div>
                    {loadingState === 'error' && <b>User name or password incorrect</b>}
                    <Button onClick={logIn}>Log in</Button>
                </div>
            </form>

        </div>





    );
};

const mapStateToProps = state => {
    // this maps react props to redux state
    return {
        user: state.userReducer.user,
        password: state.userReducer.password,
        isLoggedIn: state.userReducer.isLoggedIn,
        loadingState: state.userReducer.loadingState,
    };
};

export default connect(mapStateToProps)(Login);
