import React, {Component} from 'react'

class Form extends Component {
  render() {
    return(
      <div>
         <form id={this.props.formId} onSubmit={this.props.formSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input  type="email"
                      className="form-control"
                      id={this.props.emailId}
                      aria-describedby="emailHelp"
                      // placeholder="Enter email"
                      onChange={this.props.onChangeEmail}
                      value={this.props.valueEmail}
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input  type="password"
                      className="form-control"
                      id={this.props.passwordId}
                      // placeholder="Password"
                      onChange={this.props.onChangePassword}
                      value={this.props.valuePassword}
              />
            </div>

            <button type="submit" className="btn btn-primary">{this.props.buttonName}</button>
          </form>
      </div>
    )
  }
}

Form.defaultProp = {
  formId: '',
  emailId: '',
  passwordId: '',
  buttonName: 'Submit',
  valueEmail: '',
  valuePassword: '',
  formSubmit:() => {}
}

export default Form
