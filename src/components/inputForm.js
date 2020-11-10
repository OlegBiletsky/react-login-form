import React from 'react';

class InputForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email:'test@test.ua',
            pass:'qwe123',
            checked: true,
        };

        this.handleChangeEmailInput = this.handleChangeEmailInput.bind(this)
        this.handleChangePassInput = this.handleChangePassInput.bind(this)
        // this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleChangeCheckInput = this.handleChangeCheckInput.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)

    }

    handleChangeEmailInput(e) {
        this.setState({email: e.target.value})
    }

    handleChangePassInput(e) {
        this.setState({pass: e.target.value})
    }

    // handleChangeInput(e){
    //     const {name, type, value, checked} = e.target; 
    //     const valueToUpdate = type ==='checkbox' ? checked : value;
    //     this.setState({value:valueToUpdate})
    // }
    handleChangeCheckInput(e) {
        this.setState({checked: !this.state.checked})
    }
    handleSubmitForm(e) {
        e.preventDefault();
        const email = this.state.email, pass = this.state.pass, check = this.state.checked;
        if (email.length != 0) {
        alert( email + ', ' + pass + ', ' + check)
        } 
    }

    render() {
        return(
            <div className='main-container'>
                <div className='main-container'>

                    <h1>SIGN IN TO YOUR ACCOUNT</h1>
                    <form onSubmit={this.handleSubmitForm}>
                        <input
                            className='email-field'
                            name='email-input'
                            type='email'
                            placeholder="E-mail"
                            value={this.state.email}
                            onChange={this.handleChangeEmailInput}
                        />
                        <input
                            className='pass-field'
                            name='pass-input'
                            // type='password'
                            type='text'
                            placeholder="password"
                            value={this.state.pass}
                            onChange={this.handleChangePassInput}
                        />
                        <input
                            className='check-field'
                            name='check-input' 
                            type='checkbox' 
                            checked={this.state.checked} 
                            required
                            onChange={this.handleChangeCheckInput}
                        />
                        <label for='check-input'>Keep me signed in</label>
                        <button 
                            className='submit-btn'
                            type='submit'
                        >
                            Sign in
                        </button>
                    </form>

                </div>
            </div>
        )

    }
}
export default InputForm;