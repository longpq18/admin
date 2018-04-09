import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../redux/actions/user'
import Form from './Form'

class AddUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this._handleChangeEmail = this._handleChangeEmail.bind(this);
    this._handleChangePassword = this._handleChangePassword.bind(this);
    this._handleAddUser = this._handleAddUser.bind(this);
  }

  render() {
    return(
      <div>
        <Form
            formId='form-add-user'
            emailId='add-email'
            passwordId='add-password'
            buttonName='Add User'
            formSubmit={this._handleAddUser}
            // valueEmail={this.state.email}
            onChangeEmail={ this._handleChangeEmail }
            // valuePassword={this.state.password}
            onChangePassword={ this._handleChangePassword }
        />
      </div>
    )
  }

  _handleChangeEmail(event) {
   this.setState({email: event.target.value});
 }

 _handleChangePassword(event) {
  this.setState({password: event.target.value});
}

  _handleAddUser(event) {
      event.preventDefault();

      console.log('this.state.email: ', this.state.email)
      console.log('this.state.password: ', this.state.password)
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
