
import React, { Component } from 'react'

class AboutMe extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center" style={notReadyStyle}>Under Construction</h1>
        </div>
      </div>
    )
  }
}

const notReadyStyle = {
  marginTop: 250,
  fontSize: '100px'
}

export default AboutMe
