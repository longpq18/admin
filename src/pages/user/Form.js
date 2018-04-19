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
                      onChange={this.props.onChangeEmail}
                      defaultValue={this.props.defaultValueEmail}
                      value={this.props.valueEmail}
                      name={this.props.nameEmail}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input  type="password"
                      className="form-control"
                      id={this.props.passwordId}
                      // placeholder="Password"
                      onChange={this.props.onChangePassword}
                      defaultValue={this.props.defaultValuePassword}
                      value={this.props.valuePassword}
                      name={this.props.namePassword}
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={this.props.disabled}>{this.props.buttonName}</button>
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
  nameEmail: '',
  namePassword: '',
  defaultValueEmail: '',
  defaultValuePassword: '',
  disabled: '',
  formSubmit:() => {},
  onChangeEmail: () => {},
  onChangePassword: () => {}
}

export default Form
