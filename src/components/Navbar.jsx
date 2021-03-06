import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" href="#">
            E-Linda
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigatin"
          >
            <span className="navbar-toggel-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mx-auherfmb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-a active" aria-current="page" to ="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-a" to ="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-a " to ="/about">
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-a " to="/contact">
                  contact
                </NavLink>
              </li>
            </ul>
            <div className="butherfns">
              <NavLink to="/login" className="btn btn-outline-dark me-2">
                <i className="fa fa-sign"></i>Login
              </NavLink>

              <NavLink to="/register" className="btn btn-outline-dark me-2">
                <i className="fa fa-registered"></i>Register
              </NavLink>

              <NavLink to="/cart" className="btn btn-outline-dark me-2">
                <i className="fa fa-cart-arrow-down"></i> Cart (0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
