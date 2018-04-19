import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../redux/actions/user'
import Form from './Form'
import MainLayout from '../../layouts/MainLayout'

class EditUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.match.params.id,
      email: '',
      oldEmail: '',
      password: '',
      oldPassword: '',
      disabled: 'disabled'
    }

    this._handleChangeEmail = this._handleChangeEmail.bind(this);
    this._handleChangePassword = this._handleChangePassword.bind(this);
    this._handleUpdateUser = this._handleUpdateUser.bind(this)
  }

  componentWillMount() {
    const id = this.state.userId
    this.props.actions.getUserInfo(id).then(res => {
        let userData = this.props.user.userDetail[0]
        this.setState({oldEmail: userData.email, oldPassword: userData.password})
    }).catch(err => {
        console.log(err)
    })
  }

  _handleChangeEmail(event) {
      if(this.state.oldEmail !== event.target.value && event.target.value !== '') {
        this.setState({email: event.target.value, disabled: ''});
      }else {
        this.setState({disabled: 'disabled'});
      }

  }

  _handleChangePassword(event) {
      if(this.state.oldPassword !== event.target.value && event.target.value !== '') {
        this.setState({password: event.target.value, disabled: ''});
      } else {
        this.setState({disabled: 'disabled'});
      }
  }

  _handleUpdateUser(event) {
      event.preventDefault()
      let id = this.props.match.params.id
      let email = this.state.email || this.state.oldEmail
      let password = this.state.password || this.state.oldPassword

      this.props.actions.updateUser(id, email, password).then(res => {
        // console.log('update user: ', res)
        this.props.history.goBack()
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
       <MainLayout>
        <div>
          <h3>Edit user</h3>
          {this._renderForm()}
        </div>
      </MainLayout>
    )
  }

  _renderForm() {
    if(this.props.user.getUserInfoDone){
      let user = {
        email: '',
        password: '',
        status: ''
      }
      const userData = this.props.user.userDetail || []
      userData.find(x => {
        if(x._id === this.props.match.params.id) {
          user = {
            email: x.email,
            password: x.password,
            status: x.status
          }
        }
      })

      let email = user.email
      let password = user.password
      return(
        <Form
            formId='form-edit-user'
            emailId='edit-email'
            passwordId='edit-password'
            buttonName='Update User'
            formSubmit={this._handleUpdateUser}
            defaultValueEmail={email}
            defaultValuePassword={password}
            nameEmail='email'
            namePassword='password'
            onChangeEmail={ this._handleChangeEmail }
            onChangePassword={ this._handleChangePassword }
            disabled={this.state.disabled}
        />
      )
    }
    else {
      return(
        <h2>Loading...</h2>
      )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
