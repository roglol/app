import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";


export default class Nav extends React.Component {
  state = {
    showForm: true,
    showVideo: false,
    showPic: false,
    data: {
      name: "",
      email: "",
      number: "",
      message: ""
    },
    errors: {}
  };
  handleChange = event => {
    let data = { ...this.state.data };
    let attr = event.target.id;
    let value = event.target.value;
    data[attr] = value;
    this.setState({ data });
  };

  validate = values => {
    const errors = {};
    const requiredFields = ["name", "email", "number", "message"];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = "This field is required";
      }
    });
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (values.number && /\D/.test(values.number)) {
      errors.number = "Invalid phone number";
    }

    this.setState({ errors });
    return errors;
  };
 


  render() {
    return (
      <div className="navheader navheader1">
        <div className="navigation">
          <nav>
            <div className="logo">
              <NavLink to="/">
              <img
                alt=""
                src="https://techub.ge/wp-content/uploads/2019/05/techub-logo.png"
              />
              </NavLink>

            </div>
            <ul>
              <li>
                <a  href="#specialities">Our Specialities</a>
              </li>
              <li>
                <a href="#team" >
                  Our Team
                </a>
              </li>
              <li>
                <a onClick={this.navScroll} href="#concept">
                  The Concept
                </a>
              </li>
              <li>
                <a onClick={() => this.navScroll("tech")} href="#tech">
                  Our Technologies
                </a>
              </li>
              <li>
                <a onClick={this.navScroll} href="#georgia">
                  Why Georgia?
                </a>
              </li>
              <li>
                <a onClick={this.navScroll} href="#client">
                  Our Clients
                </a>
              </li>

              <li>
                <NavLink to="/submit">Start up Competition</NavLink>
              </li>
            
            </ul>

            <div onClick={this.props.click} className="burger_menu">
              <img
                alt=""
                src="https://a.icons8.com/aTYgjZPq/Wm3rHT/group.png"
              />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
