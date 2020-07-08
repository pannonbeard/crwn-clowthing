import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

class SignIn extends Component{
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' })
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  render(){
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput label='Email' id='sign-in-email' name='email' value={this.state.email} required type='email' handleChange={this.handleChange}/>
          <FormInput label='Password' id='sign-in-password' name='password' value={this.state.password} required type='password' handleChange={this.handleChange}/>

          <CustomButton type='submit'>
            Submit Form
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn