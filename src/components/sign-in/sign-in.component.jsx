import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends Component{
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state

    try{
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    }catch(error){
      console.log(error)
    }

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
          <div className="buttons">
            <CustomButton type='submit'>
              Submit Form
            </CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn