import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../redux/actions/user'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {
      this.props.actions.loadAllUser();
  }

  render() {
    let listUser = this.props.user
    return(
      <div>
          <h2>List user</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Status</th>
              </tr>
            </thead>

              <tbody>
                  {listUser.map((item, index)=>
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>{item.status}</td>
                    </tr>
                  )}
              </tbody>

          </table>
      </div>
    )
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
