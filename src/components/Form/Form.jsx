import React from 'react';
import {
    regexpName,
} from '../../helpers/helpers';
import {Input} from "../Input/Input";

export class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',

        firstNameMessage: '',
        lastNameMessage: '',
        emailMessageError: '',

        formValidMessage: '',
    }

    validate = () => {
        console.log('validating...');
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.firstNameHandler();
        this.lastNameHandler();

        const isValid = this.validate();
        if (isValid) {
            console.log('VALID!');
        }
        console.log('handle submit!');
    }

    firstNameHandler = () => {
        console.log('FN handler');
        const validName = regexpName.test(this.state.firstName);

        if (!this.state.firstName.length) {
            this.setState({
                firstNameMessage: `First name can't be empty!`,
            })
        } else if (!validName) {
            this.setState({
                firstNameMessage: `First name doesn't correct!`,
            })
        } else {
            this.setState({
                firstNameMessage: '',
            })
        }
    }

    lastNameHandler = () => {
        console.log('LN handler');
        const validName = regexpName.test(this.state.lastName);

        if (!this.state.lastName.length) {
            this.setState({
                lastNameMessage: `Last name can't be empty!`,
            })
        } else if (!validName) {
            this.setState({
                lastNameMessage: `Last name doesn't correct!`,
            })
        } else {
            this.setState({
                lastNameMessage: '',
            })
        }
    }

    render() {
        let formValid = true;
        return (
            <form onSubmit={this.handleSubmit} className='register-form'>

                <Input
                    label={`First name:`}
                    value={this.state.firstName}
                    message={this.state.firstNameMessage}
                    handler={this.firstNameHandler}
                    state={(e) => this.setState({firstName: e.target.value})}
                />

                <Input
                    label={`Last name:`}
                    value={this.state.lastName}
                    message={this.state.lastNameMessage}
                    handler={this.lastNameHandler}
                    state={(e) => this.setState({lastName: e.target.value})}
                />

                <button type='submit' className="btn">Register</button>
                {formValid && <div className="success-message">Hi!</div>}
            </form>
        );
    }
}
