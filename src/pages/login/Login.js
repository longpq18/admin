import React, {Component} from 'react'
import LoginForm from './FormLogin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../redux/actions/user'
import { Redirect, Route } from 'react-router-dom'
// import {browserHistory} from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this._onChangeEmail = this._onChangeEmail.bind(this)
    this._onChangePassword = this._onChangePassword.bind(this)
    this._handleLogin = this._handleLogin.bind(this)
    // this.handleLink = this.handleLink.bind(this)
  }

  _onChangeEmail(event) {
    this.setState({ email: event.target.value })
  }

  _onChangePassword(event) {
    this.setState({ password: event.target.value })
  }

  _handleLogin(event) {
    event.preventDefault()
    const email = this.state.email || ''
    const password = this.state.password || ''

    this.props.actions.login(email, password).then(res => {
      this.props.history.push('/home')

    }).catch(err => {
      console.log('Login error: ', err)
    })
  }

  render() {
    return (
      <div className='login-form'>
        <h2>Login</h2>
        <LoginForm
              formLoginId = 'login-form-id'
              formLoginSubmit = { this._handleLogin }
              onChangeEmail = { this._onChangeEmail }
              onChangePassword = { this._onChangePassword }
          />
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      user: state.user
    }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
