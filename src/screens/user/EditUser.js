import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../redux/actions/user'

class EditUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.match.params.id
    }
  }

  componentDidMount() {
    this.props.actions.loadAllUser().then(res => {
        console.log('Load all user success')
    }).catch(err => {
        console.log(err)
    })
  }

  render() {
    // const user = queryString.parse(this.props.location.params)
    let email = ''
    let password = ''
    let status = ''
    this.props.user.find(x => {
      if(x._id === this.props.match.params.id) {
        email = x.email
        password = x.password
        status = x.status
      }
    })

    return(
      <div>
        <h3>Edit user</h3>
        <h3>{email}</h3>
        <p>{password}</p>
        <p>{status}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
