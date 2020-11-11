import React from 'react';
import './inputForm.css';

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
            email:null,
            password:null,
            checkbox: true,

            errorEmail: null,
            errorPassword: null,
            errorCheckbox: null,

            hiddenPass: false,
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
            <div className="main-container">

                    <form className="form" onSubmit={this.handleSubmitForm} noValidate>
                        <h1 className="title-h1">SIGN IN TO YOUR ACCOUNT</h1>


                        <input
                            className='email-field'
                            name='email-input'
                            type='email'
                            placeholder="E-mail"
                            value={this.state.email}
                            
                            onChange={this.handleChangeEmailInput}
                        />
                        {this.state.errorEmail && (
                                <span className="errorEmailMessage">{this.state.errorEmail}</span>
                            )}




                        <div className='password-section'>
                            <input
                                className='password-field'
                                name='password-input'
                                type={this.state.hiddenPass ? 'text' : 'password'}
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.handleChangePasswordInput}
                            />
                            <button className="btn-show-pass" onClick={(e) => {e.preventDefault() 
                                        return  this.setState({
                                        hiddenPass:!this.state.hiddenPass})      
                                }
                            }>
                            Show / Hide
                            </button>
                            {this.state.errorPassword && (
                                <span className="errorPassMessage">{this.state.errorPassword}</span>
                            )}
                        </div>





                        <label for='checkbox-input' className='label-for-checkbox'>Keep me signed in</label>
                        <input
                            className='checkbox-field'
                            name='checkbox-input' 
                            type='checkbox'
                            checked={this.state.checkbox} 
                            onChange={this.handleChangeCheckboxInput}
                        />
                        {this.state.errorCheckbox && (
                            <span className="errorCheckboxMessage">{this.state.errorCheckbox}</span>
                        )}




                        <button className='submit-form-btn' type='submit' >Sign in</button>

                    </form>

            </div>
        )
    }
}
export default InputForm;