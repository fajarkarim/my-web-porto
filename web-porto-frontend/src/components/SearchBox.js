
import React, { Component } from 'react'

class SearchBox extends Component {
  constructor () {
    super()
    this.state = {
      searchVal: ''
    }
  }

  handleChange(e) {
    this.setState({
      searchVal: e.target.value
    })
  }

  render () {
    return (
      <div className="row justify-content-center mt-5 mb-2">
        <div className="form-group col-8 justify-content-center">
          <input onChange={(e) => this.handleChange(e)} type="text" className="form-control"  placeholder="search everything..."/>
        </div>
      </div>
    )
  }
}

export default SearchBox
