import React, {Component} from 'react'
import Form from './Form'

export default class AddUser extends Component {
  render() {
    return(
      <div>
        <Form
            formId='form-add-user'
            emailId='add-email'
            passwordId='add-password'
            buttonName='Add'
            {...this.props}
        />
      </div>
    )
  }
}
