import React from 'react'
import classes from './LogIn.module.css'
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import App from "../../App";
import { Redirect } from "react-router-dom";


class Register extends React.Component{

  state = {
    redirect: false,
    errorMessage: '',
    nameString: '',
    familynameString: '',
    loginString: '',
    passwordString: ''
  }

  async onRegister (e) {
    e.preventDefault();
    const res = await App.serverController.register({
      "name" : this.state.nameString,
      "secondName" : this.state.familynameString,
      "email" : this.state.loginString,
      "password" : this.state.passwordString
    })
    console.log('onRegister', res)
    if(res.status === 'register_success') {
      this.setState({
        redirect: true
      })
    } else if(res.status === 'register_user_exist') {
      const errorMessage = 'User already exist'
      this.setState({
        errorMessage
      })
    }
  }

  onNameInput = (e) => {
    const nameString = e.target.value;
    this.setState({
      nameString
    })
  }

  onFamilynameInput = (e) => {
    const familynameString = e.target.value;
    this.setState({
      familynameString
    })
  }

  onLoginInput = (e) => {
    const errorMessage = ''
    this.setState({
      errorMessage
    })

    const loginString = e.target.value;
    this.setState({
      loginString
    })
  }

  onPasswordInput = (e) => {
    const passwordString = e.target.value;
    this.setState({
      passwordString
    })
  }

  render() {

    return (
      <div className={classes.LogIn}>

        { this.state.redirect
          ? <Redirect to='/login'/>
          : null}

        <div>
          <h1>Register new user</h1>
          {this.state.errorMessage
          ?<span>{this.state.errorMessage}</span>
          : null}
          <form className={classes.Form}>
            <Input label={'Enter email'}
                   onChange={this.onLoginInput}
            />
            <Input label={'Enter password'}
                   onChange={this.onPasswordInput}
            />
            <Input label={'Enter your name'}
                   onChange={this.onNameInput}
            />
            <Input label={'Enter your family name'}
                   onChange={this.onFamilynameInput}
            />

            <Button
              type="success"
              caption='Register'
              onClick={this.onRegister.bind(this)}
            >
            </Button>
          </form>
        </div>
      </div>
    )
  }
}
export default Register