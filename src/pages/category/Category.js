import React, {Component} from 'react'
import MainLayout from '../../layouts/MainLayout'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../redux/actions/category'
import { Link } from 'react-router-dom'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.actions.loadAllCategory().then(res => {
      console.log('loadAllCategory success')
    }).catch(err => {
      console.log('loadAllCategory error: ', err)
    })
  }

  render() {

    return(
      <MainLayout>
        <div id="category">
          <p>Category</p>
          <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                  <th scope="col"><a href="/add_user" className='btn btn-success'>Add</a></th>
                </tr>
              </thead>

              {this._renderTable()}

          </table>
        </div>
      </MainLayout>
    )
  }

  _renderTable() {
    if(this.props.category.getAllCatDone) {
      let cats = this.props.category.catData || []
      return(
        <tbody>
            {cats.map((item, index)=>

              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
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

}

function mapStateToProps(state) {
    return {
      category: state.category
    }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
