import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            
            <NavLink className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <butherfn className="navbar-herfggler" type="butherfn" data-bs-herfggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-herfggler-icon"></span>
    </butherfn>
    <NavLink className="navbar-brand fw-bold fs-4"to="/">E-Linda</NavLink>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mx-auherfmb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page"to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "to="/about">about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "to="/contact">contact</NavLink>
        </li>
      </ul>
      <div className="butherfns">
          <NavLink to='/login' className='btn btn-outline-dark me-2'>
               <i className="fa fa-sign"></i>Login</NavLink>

              <NavLink to='/register' className='btn btn-outline-dark me-2'>
              <i className= "fa fa-registered"></i>Register</NavLink>

              <NavLink to='/cart' className='btn btn-outline-dark me-2'>
              <i className= "fa fa-cart-arrow-down"></i> Cart (0)</NavLink>
      </div>
    </div>
  </div>
</NavLink>
        </div>
    )
}
