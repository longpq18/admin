import React, {Component} from 'react'

class Login extends Component {
  render() {
    return (
      <div>
          <form id={this.props.formLoginId} onSubmit={this.props.formLoginSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input  type="email"
                        className="form-control"
                        id="email-login"
                        onChange={this.props.onChangeEmail}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input  type="password"
                        className="form-control"
                        id="password-login"
                        onChange={this.props.onChangePassword}
                />
              </div>

              <button type="submit" className="btn btn-primary">{this.props.nameButton}</button>
          </form>
      </div>
    )
  }
}

Login.defaultProps = {
  formLoginId: '',
  formLoginSubmit: ()=>{},
  onChangeEmail: ()=>{},
  onChangePassword: ()=>{},
  nameButton: 'Login'
}


export default Login
