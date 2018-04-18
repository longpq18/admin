import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../redux/actions/user'
import { Link } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
    // this._onDeleteUser = this._onDeleteUser.bind(this)
  }

  componentWillMount() {
      this.props.actions.loadAllUser().then(res => {
          console.log('Load user success')
      }).catch(err => {
          console.log('Load user failure')
          console.log(err)
      })
  }

  render() {

    return(
      <MainLayout>
        <div>
            <h2>List user</h2>
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                    <th scope="col"><Link to="/add_user" className='btn btn-success'>Add</Link></th>
                  </tr>
                </thead>

                {this._renderTable()}

            </table>
        </div>
      </MainLayout>
    )
  }

  _renderTable() {
    if(this.props.user.getAllUserInfoDone) {
      let listUser = this.props.user.userData || []
      return(
        <tbody>
            {listUser.map((item, index)=>

              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.status}</td>
                <td><Link className='btn btn-primary' to={{pathname: `/edit_user/${item._id}`, params: item }}>Edit</Link></td>
                <td><button className='btn btn-danger' onClick={() => { this._onDeleteUser(item._id) }}>Delete</button></td>
              </tr>
            )}
        </tbody>
      )
    } else {
      return(
        <tbody><tr><td><h2>Loading...</h2></td></tr></tbody>
      )
    }
  }

  _onDeleteUser(userId) {
    console.log('Handle Delete User')
    this.props.actions.deleteUser(userId).then(res => {
      alert('Delete success')
      window.location.reload()
    }).catch(err => {
      console.log(err)
    })
  }

}

// User.propTypes = {
//   user: PropTypes.array.isRequired
// };

function mapStateToProps(state) {
    return {
      user: state.user
    }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
