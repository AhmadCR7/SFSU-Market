
import React from 'react';
import { connect } from 'react-redux';
import { setUser, setPassword, setIsLoggedIn, setLoadingState } from '../../Redux/actions/userActions';
import { Redirect } from 'react-router-dom';
import "./login.css"


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
            if (user === 'ahmad' && password === '123') {
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
        <div className="col-lg-4 offset-lg-4">

            <form >
                <h3>Login</h3>
                <div className="form-group" >

                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="username" value={user}
                            onChange={e => dispatch(setUser(e.target.value))}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={e => dispatch(setPassword(e.target.value))} />
                    </div>

                </div>
                <div>
                    {loadingState === 'error' && <b>User name or password incorrect</b>}
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={logIn}>Sign Up</button>
                    <p className="forgot-password text-right">
                        username: ahmad password: 123
                </p>
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
