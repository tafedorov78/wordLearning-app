import React from 'react'
import classes from './LogIn.module.css'
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import App from "../../App";
import { Redirect } from "react-router-dom";

class Login extends React.Component{

  state = {
    redirect: false,
    loginString: '',
    passwordString: ''
  }

  async onLogin (e) {
    e.preventDefault();
    const res = await App.serverController.login({"email" : this.state.loginString, "password" : this.state.passwordString})
    console.log('onRegister', res)
    if(res.status === 'login_user_found') {
      const redirect = true
      this.setState({
        redirect
      })
    }
  }

  onLoginInput = (e) => {
    const loginString = e.target.value;
    console.log(loginString)
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
          ? <Redirect to='/play'/>
          : null}

        <div>
          <h1>User login</h1>

          <form className={classes.Form}>
            <Input label={'Enter email'}
                   onChange={this.onLoginInput}
            />
            <Input label={'Enter password'}
                   onChange={this.onPasswordInput}
            />

            <Button
              type="success"
              caption='Log in'
              onClick={this.onLogin.bind(this)}
            >
            </Button>
          </form>
        </div>
      </div>
    )
  }
}
export default Login