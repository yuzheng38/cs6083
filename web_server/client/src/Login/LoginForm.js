import './LoginForm.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    user
}) => (
    <div className="container">
        <div className="card-panel login-panel">
            <form className="col s12" action="/" onSubmit={onSubmit}>
                <h4 className="center-align">Log in</h4>
                {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
                <div className="row">
                    <div className="input-field col s12">
                    <input id="username" type="text" name="username" onChange={onChange}/>
                    <label htmlFor='username'>Username</label>
                    </div>
                </div>
                {errors.email && <div className="row"><p className="error-message">{errors.username}</p></div>}
                <div className="row">
                    <div className="input-field col s12">
                    <input className="validate" id="password" type="password" name="password" onChange={onChange}/>
                    <label htmlFor='password'>Password</label>
                    </div>
                </div>
                {errors.password && <div className="row"><p className="error-message">{errors.password}</p></div>}
                <div className="row right-align">
                    <input type="submit" className="waves-effect waves-light btn indigo lighten-1" value='Log in'/>
                </div>
                <div className="row">
                    <p className="right-align"> New user?  <Link to="/signup">Sign Up</Link></p>
                </div>
            </form>
        </div>
    </div>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

export default LoginForm;
