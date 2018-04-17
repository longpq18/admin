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
      password: ''
    }

    this._handleChangeEmail = this._handleChangeEmail.bind(this)
    this._handleChangePassword = this._handleChangePassword.bind(this)
  }

  componentDidMount() {
    // this.props.actions.loadAllUser().then(res => {
    //     console.log('Load all user success')
    // }).catch(err => {
    //     console.log(err)
    // })
  }

  _handleChangeEmail(event) {
    this.setState({email: event.target.value});
    console.log()
  }
  _handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  _handleUpdateUser(event) {
    event.preventDefault()
    const email = this.state.email
    const password = this.state.password

    this.props.actions.updateUser(email, password).then(res => {
      alert('Update success')
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    // console.log('this.props: ', this.props)
    // console.log('this.props.user: ', this.props.user)
    let user = {
      email: '',
      password: '',
      status: ''
    }

    const userData = this.props.user.userData || []

    userData.find(x => {
      if(x._id === this.props.match.params.id) {
        user = {
          email: x.email,
          password: x.password,
          status: x.status
        }

      }
    })

    return(
      <MainLayout>
        <div>
          <h3>Edit user</h3>
          <Form
              formId='form-edit-user'
              emailId='edit-email'
              passwordId='edit-password'
              buttonName='Update User'
              formSubmit={this._handleUpdateUser}
              valueEmail={user.email}
              valuePassword={user.password}
              onChangeEmail={ this._handleChangeEmail }
              onChangePassword={ this._handleChangePassword }
          />
        </div>
      </MainLayout>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
