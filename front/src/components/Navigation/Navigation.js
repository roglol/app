import React from "react";
import "./Navigation.css";
import {NavLink} from 'react-router-dom'
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import SimpleReactValidator from 'simple-react-validator';


class Navigation extends React.Component {
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
  };
  validator = new SimpleReactValidator({
    validators: {
      number: {  
        message: 'The :attribute must be a valid number',
        rule: (val, params, validator) => {
          return validator.helpers.testRegex(val,/^-?\d+\.?\d*$/) 
        },  
        required: true  
      }
    }
  });
  handleChange = event => {
    let data = { ...this.state.data };
    let attr = event.target.id;
    let value = event.target.value;
    data[attr] = value;
    this.setState({ data });
  };

  
  navScroll = (e) => {
    console.log(e);
    console.log( this.refs.team);
  };

  displayImage = () => {
    const showPic = this.state.showPic;
    this.setState({ showForm: false, showPic: !showPic });
  };
  displayVideo = () => {
    const showVideo = this.state.showVideo;
    this.setState({ showForm: false, showPic: false, showVideo: !showVideo });
  };
  userData = () =>{
    fetch('/contact', {
      method: 'POST',
      headers : {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({...this.state.data})
  }).then(res =>{
    return res.json()
  }).then(data =>
    console.log(data));

  }
  onSubmit = event => {
    event.preventDefault();
    if (this.validator.allValid()) {
      this.setState({data:{}})
      this.userData()
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div className="navheader">
        <div className="navigation">
          <nav>
            <div className="logo">
              <img
                alt=""
                src="https://techub.ge/wp-content/uploads/2019/05/techub-logo.png"
              />
            </div>
            <ul>
              <li>
                <a href="#specialities">Our Specialities</a>
              </li>
              <li>
                <a onClick={() => this.navScroll('team')} href="#team">
                  Our Team
                </a>
              </li>
              <li>
                <a onClick={this.navScroll} href="#concept">
                  The Concept
                </a>
              </li>
              <li>
                <a onClick={() => this.navScroll('tech')} href="#tech">
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

            <li><NavLink  activeClassName='is-active'  to='/submit'>Start up Competition</NavLink ></li>
            
            </ul>

            <div onClick={this.props.click} className="burger_menu">
              <img
                alt=""
                src="https://a.icons8.com/aTYgjZPq/Wm3rHT/group.png"
              />
            </div>
            
          </nav>
        </div>
                    <div className='flag'>
          <img src={require('./flag.png')} alt=""></img>
      </div>
        <div className="navigation-gallery">
          <img
            alt=""
            src="https://a.icons8.com/awbSrVbV/q0iolw/group.png"
            className="lower_image"
          />
          <img
            className="left_logo"
            alt=""
            src="https://a.icons8.com/OoXRnibR/jhwpD2/group.png"
          />
        </div>

        <div className="outer_container">
          <div className="container" id="contact">
            <div className="info">
              <img
                alt=""
                className="upper_logo"
                src="https://a.icons8.com/OoXRnibR/52z6p3/group.png"
              />
              <img
                className="lower_logo"
                alt=""
                src="https://a.icons8.com/OoXRnibR/iZES6g/group.png"
              />
              <img
                className="tablet_logo"
                alt=""
                src="https://a.icons8.com/awbSrVbV/dUdOsb/group.png"
              />
              <img
                alt=""
                src="https://a.icons8.com/awbSrVbV/Uxkmty/group.png"
                className="top_image"
              />
              <h1>Our UNIQUE recipe that made Techub what it is -</h1>
              <h2>A Sowtfare development center </h2>
              <p>
                Top graduates of OUR own Hi Tech Academy carefully and Seniors
                developers to fit the spirit of the israeli training and working
                methodologies long with local excellent managers.
              </p>
              <div className="buttons">
                <button className="discover">Discover more</button>
                <button className="play" onClick={this.displayVideo}>
                  <img
                    alt=""
                    className="arrow_icon"
                    src="https://a.icons8.com/OoXRnibR/IIFif2/round--av--play_ar.png
"
                  />
                  <span>Play Video</span>
                </button>
              </div>
            </div>

            <div
              className={this.state.showForm ? "contact" : "contact_removed"}
            >
              {this.state.showForm && (
                <>
                  <button className="close_button">
                    <img
                      src={require("./close.png")}
                      alt=""
                      onClick={this.displayImage}
                    />
                  </button>

                  <h1>Contact us !</h1>
                  <form onSubmit={this.onSubmit}>
                    <FormControl>
                      <InputLabel htmlFor="my-input">Full name</InputLabel>
                      <Input
                        id="name"
                        aria-describedby="my-helper-text"
                        name="name"
                        onChange={this.handleChange}
                        autoComplete="off"
                        value={this.state.data.name || ""}
                      />
                    {this.validator.message('name', this.state.data.name, 'required|alpha')}
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="my-input">E-mail Address</InputLabel>
                      <Input
                        id="email"
                        autoComplete="off"
                        aria-describedby="my-helper-text"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.data.email || ""}
                      />
                     {this.validator.message('email', this.state.data.email, 'required|email')}
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="my-input">Phone number</InputLabel>
                      <Input
                        id="number"
                        autoComplete="off"
                        aria-describedby="my-helper-text"
                        onChange={this.handleChange}
                        name="number"
                        value={this.state.data.number || ""}
                      />
                    {this.validator.message('number', this.state.data.number, 'required|number')}
                    </FormControl>
                    <FormControl>
                      <TextField
                        onChange={this.handleChange}
                        value={this.state.data.message || ""}
                        name="message"
                        label={"Description"}
                        id="message"
                        autoComplete="off"
                        aria-describedby="my-helper-text"
                        fullWidth
                        multiline
                        rows="15"
                      />
                   {this.validator.message('message', this.state.data.message, 'required')}
                    </FormControl>
                    <button type="submit"
                    onClick = {this.onSubmit}
                    >
                      <span>SEND MESSAGE</span>
                      <img
                        alt=""
                        src="https://a.icons8.com/OoXRnibR/YjciI9/%F0%9F%94%B9-icon-color.png"
                      />
                    </button>
                  </form>
                </>
              )}

              {this.state.showPic && (
                <img
                  src="https://a.icons8.com/gTpfdSef/RtYTMZ/bitmap.png"
                  className="contact_background"
                  alt=""
                />
              )}

              {this.state.showVideo && (
                //  <video width="320" height="240" controls className="video">
                //  <source src="https://www.youtube.com/watch?v=Ya0AqLiPsWM" type="video/webm"/>
                // </video>
                <video
                  width="320"
                  height="240"
                  controls
                  autoPlay
                  className="video"
                >
                  <source src="videos/techhub.mp4" type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>
        <div className="social_icons">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Navigation;
