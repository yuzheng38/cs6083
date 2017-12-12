import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../Auth/Auth';
import SignupForm from './SignupForm';

class SignUpPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            errors: {},
            user: {
                username: '',
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirm_password: ''
            }
        };
        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    // event handler for signup page
    processForm(event) {
        event.preventDefault();

        const username = this.state.user.username;
        const firstname = this.state.user.firstname;
        const lastname = this.state.user.lastname;
        const email = this.state.user.email;
        const password = this.state.user.password;
        const confirm_password = this.state.user.confirm_password;

        if (password !== confirm_password) {
            return;
        }

        //post signup form data
        // construct fetch options
        const init = {
            method: 'POST',
            cache: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            })
        };


        console.log(username);
        console.log(firstname);
        console.log(lastname);
        console.log(email);
        console.log(password);
        console.log(confirm_password);
        /*
          this needs to be updated to fetch from web server
        */
        // fetch('http://localhost:3000/auth/signup', init)
        //     .then(response => {
        //         if (response.statuc === 200) {
        //             this.setState({
        //                 errors: {}
        //             });
        //
        //             // change the current URL to /login
        //             this.context.router.replace('/login');
        //         } else {
        //             response.json().then(function(json){
        //                 console.log(json);
        //                 const errors = json.errors ? json.errors : {};
        //                 errors.summary = json.message;
        //                 this.setState({errors});
        //             }.bind(this));
        //         }
        //     });
    }

    changeUser(event) {
        const inputField = event.target.name;   // gets the input field values
        const user = this.state.user;
        user[inputField] = event.target.value;

        this.setState({ user });

        const errors = this.state.errors;
        if (this.state.user.password !== this.state.user.confirm_password) {
            errors.password = "Password and Confirm Password don't match.";
        } else {
            errors.password = '';
        }
        this.setState({errors});
    }

    render(){
        return (
            <SignupForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }
}

SignUpPage.contextTypes = {
    router: PropTypes.object.isRequired
}

export default SignUpPage;
