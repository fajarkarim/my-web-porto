import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ContactMe extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1 className="text-center">Keep in touch, Get Connected</h1>
            <p className="text-center">Let's create something bigger</p>
          </div>
          <div className="col-4 pb-md-4 pt-4">
            <div className="row justify-content-center">
              <div class="card-body">
                <a target="_blank" href='https://web.facebook.com/fajar.abdulkarim'>
                  <img src="https://png.icons8.com/facebook/color/96" title="facebook" width="96" height="96"/>
                </a>
                <p className="text-center">Facebook</p>
              </div>
            </div>
          </div>

          <div className="col-4 pb-md-4 pt-4">
            <div className="row justify-content-center">
              <div class="card-body">
                <a target="_blank" href='https://png.icons8.com/linkedin/color/96'>
                  <img src="https://png.icons8.com/linkedin/color/96" title="linkedin" width="96" height="96"/>
                </a>
                <p className="text-center">Facebook</p>
              </div>
            </div>
          </div>

          <div className="col-4 pb-md-4 pt-4">
            <div className="row justify-content-center">
              <div class="card-body">
                <a href='mailto:fajarabdulkarim@gmail.com'>
                  <img src="https://png.icons8.com/email/color/96" title="email" width="96" height="96"/>
                </a>
                <p className="text-center">Email</p>
              </div>
            </div>
          </div>

        </div>

        <div className="row justify-content-center">
          <div className="col-md-5">
            <form className="form-group" method="POST" action="http://formspree.io/fajarabdulkarim@gmail.com">
              <input className="form-control mb-1" type="email" name="email" placeholder="email me, your email here..."/>
              <textarea className="form-control" name="message" placeholder="message me right away.." rows='5'></textarea>
              <div className="row justify-content-center mt-2">
                <button className="col-md-4 btn btn-primary" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactMe
