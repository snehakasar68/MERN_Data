import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import InfoIcon from '@material-ui/icons/Info';
import TextsmsIcon from '@material-ui/icons/Textsms';
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }
  return (
    <nav className="navbar navbar-expand-lg  bg-warning">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{color:"black"}}>
          ThinkQuient
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" style={{color:"black"}} activeClassName>
              <HomeIcon /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about" style={{color:"black"}}>
               <InfoIcon/> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact" style={{color:"black"}}>
              <PermContactCalendarIcon/>Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/enquiry" style={{color:"black"}}>Enquiry</Link>
      </div>
    </nav>
  );
};

export default Navbar;
