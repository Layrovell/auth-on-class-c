import React from 'react';
import {
    fields,
    regexpName,
    regexpEmail,
    limit,
    regexpLogin,
    regexpPassword,
} from '../../helpers/helpers';
import {Input} from "../Input/Input";

export class Form extends React.Component {
    state = {
        firstName: '',
        firstNameMessage: '',
        isFirstNameValid: false,

        lastName: '',
        lastNameMessage: '',
        isLastNameValid: false,

        email: '',
        emailMessage: '',
        isEmailValid: false,

        date: '',
        dateMessage: '',
        isDateValid: false,

        login: '',
        loginMessage: '',
        isLoginValid: false,

        password: '',
        passwordMessage: '',
        isPasswordValid: false,

        repeatPassword: '',
        repeatPasswordMessage: '',
        isRepeatPasswordValid: false,

        formValidMessage: '',
        isFormValid: false,
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.firstNameHandler();
        this.lastNameHandler();
        this.emailHandler();
        this.dateHandler();
        this.loginHandler();
        this.passwordHandler();
        this.repeatPasswordHandler();

        const {
            isFirstNameValid, isLastNameValid, isEmailValid, isDateValid,
            isLoginValid, isPasswordValid, isRepeatPasswordValid} = this.state;

        const valid = isFirstNameValid && isLastNameValid && isEmailValid
            && isDateValid && isLoginValid && isPasswordValid && isRepeatPasswordValid;

        console.log(this.state);
        console.log('valid: ', valid);
        console.log('isFormValid: ', this.state.isFormValid);

        if (valid) {
            this.setState({
                formValidMessage: 'All is clearly!',
                isFormValid: true,
            })
        } else {
            this.setState({
                formValidMessage: 'Not all fields are correct!',
                isFormValid: false,
            })
        }
    }

    firstNameHandler = () => {
        const validFirstName = regexpName.test(this.state.firstName);

        if (!this.state.firstName.length) {
            this.setState({firstNameMessage: `First name can't be empty!`})
        } else if (!validFirstName) {
            this.setState({firstNameMessage: `First name doesn't correct!`})
        } else {
            this.setState({
                firstNameMessage: '',
                isFirstNameValid: true
            })
        }
    }

    lastNameHandler = () => {
        const validName = regexpName.test(this.state.lastName);

        if (!this.state.lastName.length) {
            this.setState({lastNameMessage: `Last name can't be empty!`})
        } else if (!validName) {
            this.setState({lastNameMessage: `Last name doesn't correct!`})
        } else {
            this.setState({
                lastNameMessage: '',
                isLastNameValid: true,
            })
        }
    }

    emailHandler = () => {
        const validEmail = regexpEmail.test(this.state.email);

        if (!this.state.email.length) {
            this.setState({emailMessage: `Email can't be empty!`})
        } else if (!validEmail) {
            this.setState({emailMessage: `Email doesn't correct!`})
        } else {
            this.setState({
                emailMessage: '',
                isEmailValid: true,
            })
        }
    }

    dateHandler = () => {
        let dateNow = new Date().toISOString().split('T')[0];
        let currentAge = (new Date(dateNow).getTime() - new Date(this.state.date).getTime()) / 1000 / 60 / 60 / 24;
        currentAge = Math.round(currentAge / 365);

        if (!this.state.date.length) {
            this.setState({dateMessage: `Date of birth can't be empty!`})
        } else if (currentAge < limit) {
            this.setState({dateMessage: `Age of the user is less than 16!`})
        } else {
            this.setState({
                dateMessage: '',
                isDateValid: true,
            })
        }
    }

    loginHandler = () => {
        const validLogin = regexpLogin.test(this.state.login);

        if (!this.state.login.length) {
            this.setState({loginMessage: `Login can't be empty!`})
        } else if (!validLogin) {
            this.setState({loginMessage: `Login doesn't correct!`})
        } else {
            this.setState({
                loginMessage: '',
                isLoginValid: true,
            })
        }
    }

    passwordHandler = () => {
        const validPassword = regexpPassword.test(this.state.password);

        if (!this.state.password.length) {
            this.setState({passwordMessage: `Password can't be empty!`})
        } else if (!validPassword) {
            this.setState({passwordMessage: `Password doesn't correct!`})
        } else if (this.state.password.length < 6) {
            this.setState({passwordMessage: 'Password must be at least 6 characters!'})
        } else {
            this.setState({
                passwordMessage: '',
                isPasswordValid: true,
            })
        }
    }

    repeatPasswordHandler = () => {
        if (!this.state.repeatPassword.length) {
            this.setState({repeatPasswordMessage: `Repeat password!`})
        } else if (this.state.password !== this.state.repeatPassword) {
            this.setState({repeatPasswordMessage: `Password repeated doesn't correct!`})
        } else {
            this.setState({
                repeatPasswordMessage: '',
                isRepeatPasswordValid: true,
            })
        }
    }

    generateTypeForInput = (elem) => {
        switch (elem) {
            case 'email':
                return 'email'
            case 'date':
                return 'date'
            case 'password':
            case 'repeatPassword':
                return 'password'
            default:
                return 'text'
        }
    }

    render() {
        const inputs = fields.map((elem, idx) => {
            return (
                <Input
                    key={idx}
                    label={`${elem}`}
                    value={this.state[`${elem}`]}
                    message={this.state[`${elem}Message`]}
                    handler={this[`${elem}Handler`]}
                    state={(e) => this.setState({[`${elem}`]: e.target.value})}
                    type={`${this.generateTypeForInput(elem)}`}
                />
            )
        })

        return (
            <form onSubmit={this.handleSubmit} className='register-form'>
                {inputs}
                <button type='submit' className="btn">Register</button>

                {this.state.formValidMessage &&
                <div
                    className={`${this.state.isFormValid ? 'success-form' : 'error-form'}`}
                >
                    {this.state.formValidMessage}
                </div>}
            </form>
        );
    }
}
