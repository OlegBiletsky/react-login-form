import React from 'react';
import { valid } from 'semver';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class InputForm extends React.Component {
    constructor() {
        super();
        this.state = {
            // email:'test@test.ua',
            email:null,
            // password:'qwe123',
            password:null,
            checkbox: true,

            errorEmail: null,
            errorPassword: null,
            errorCheckbox: null,
        };
        this.handleChangeEmailInput = this.handleChangeEmailInput.bind(this)
        this.handleChangePasswordInput = this.handleChangePasswordInput.bind(this)
        // this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleChangeCheckboxInput = this.handleChangeCheckboxInput.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }


    handleChangeEmailInput(e) {
        this.setState({email: e.target.value})

        if (!emailRegex.test(e.target.value)) {
            this.setState((state)=>{
                return {errorEmail: "Перевірте коректність емейлу"}
            })
        } else {
            this.setState({errorEmail: true})
        }
    }   
 
    handleChangePasswordInput(e) {
        this.setState({password: e.target.value})
        if (e.target.value === null || e.target.value.length <8) {
            this.setState((state)=>{
                return {errorPassword: "Мінімум 8 символів"}
            })
        } else {
            this.setState({errorPassword: true})
        }
    }
    handleChangeCheckboxInput(e) {
        this.setState({checkbox: !this.state.checkbox})
        if (e.target.checked === false) {
            this.setState((state)=>{
                return {errorCheckbox: "Вам доведеться вводити щоразу Ваші дані"}
            })
        } else {
            this.setState({errorCheckbox: "Ми надійно запам'ятали Вас"})
        }
    }
    // handleChangeInput(e){
    //     const {name, type, value, checked} = e.target; 
    //     const valueToUpdate = type ==='checkbox' ? checked : value;
    //     this.setState({value:valueToUpdate})
    // }
    
    handleSubmitForm(e) {
        e.preventDefault();
        const  {email, password,  checkbox} = this.state;
        if (this.state.errorEmail === true && this.state.errorPassword === true ) {
            alert( 'e-mail: ' + email + ',   password: ' + password + ',   sign in: ' + checkbox)
        }
    }

    render() {
        return(
            <div className='main-container'>
                <div className='main-container'>

                    <h1>SIGN IN TO YOUR ACCOUNT</h1>
                    <form onSubmit={this.handleSubmitForm} noValidate>
                        <input
                            className='email-field'
                            name='email-input'
                            type='email'
                            placeholder="E-mail"
                            value={this.state.email}
                            
                            onChange={this.handleChangeEmailInput}
                        />
                        {this.state.errorEmail && (
                                <span className="errorMessage">{this.state.errorEmail}</span>
                            )}
                        <input
                            className='password-field'
                            name='password-input'
                            // type='password'
                            type='text'
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChangePasswordInput}
                        />
                        {this.state.errorPassword && (
                            <span className="errorMessage">{this.state.errorPassword}</span>
                        )}
                        <input
                            className='checkbox-field'
                            name='checkbox-input' 
                            type='checkbox' 
                            checked={this.state.checkbox} 
                            required
                            onChange={this.handleChangeCheckboxInput}
                        />
                        {this.state.errorCheckbox && (
                            <span className="errorMessage">{this.state.errorCheckbox}</span>
                        )}
                        <label for='checkbox-input' className='label-for-checkbox'>Keep me signed in</label>
                        <button className='submit-btn' type='submit' >Sign in</button>
                    </form>

                </div>
            </div>
        )
    }
}
export default InputForm;