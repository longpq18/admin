import React, {Component} from 'react'

class Form extends Component {
  render() {
    return(
      <div>
        <form id={this.props.formId}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id={this.props.emailId} aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id={this.props.passwordId} placeholder="Password">
            </div>

            <button type="submit" class="btn btn-primary">{this.props.buttonName}</button>
          </form>
      </div>
    )
  }
}

Form.defaultProp = {
  formId: '',
  emailId: '',
  passwordId: '',
  buttonName: 'Submit'
}

export default Form
