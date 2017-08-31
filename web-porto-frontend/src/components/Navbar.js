import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
        <div className="container justify-content-around">
            <div className="col nav-item">
              <div className="row justify-content-center">
                <Link to="/" className="nav-link"><i className="fa fa-chevron-left fa-3x" aria-hidden="true"></i></Link>
              </div>
            </div>
            <div className="col nav-item">
              <div className="row justify-content-center">
                <Link to="/" className="nav-link"><i className="fa fa-home fa-3x" aria-hidden="true"></i></Link>
              </div>
            </div>
            <div className="col nav-item">
              <div className="row justify-content-center">
                <Link to="/" className="nav-link"><i className="fa fa-bars fa-3x" aria-hidden="true"></i></Link>                
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
