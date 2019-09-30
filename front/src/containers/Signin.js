import React from 'react';
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
// import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
// import IntlMessages from '../util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
// import "./_login.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

//   componentDidUpdate() {
//     if (this.props.showMessage) {
//       setTimeout(() => {
//         this.props.hideMessage();
//       }, 100);
//     }
//     if (this.props.authUser !== null) {
//       this.props.history.push('/');
//     }
//   }

  render() {
    const {
      email,
      password
    } = this.state;
    const {loader} = this.props;
    return (
        <div className="signin-main">
      <div
        className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">

          <div className="app-logo-content d-flex align-items-center justify-content-center">
            <Link className="logo-lg" to="/" title="Jambo">
              <img src={'https://techub.ge/wp-content/uploads/2018/09/techub-logo-3.png'} alt="jambo" title="jambo"/>
            </Link>
          </div>

          <div className="app-login-content">
            <div className="app-login-header mb-4">
              <h1>Sign In</h1>
            </div>

            <div className="app-login-form">
              <form>
                <fieldset>
                  <TextField
                    label={'Email'}
                    fullWidth
                    onChange={(event) => this.setState({email: event.target.value})}
                    defaultValue={email}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />
                  <TextField
                    type="password"
                    label="password"
                    fullWidth
                    onChange={(event) => this.setState({password: event.target.value})}
                    defaultValue={password}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />

                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Button onClick={() => {
                      this.props.showAuthLoader();
                      this.props.userSignIn({email, password});
                    }} variant="contained" color="primary">
                     signIn
                    </Button>

                    {/* <Link to="/signup">
                      signUp
                    </Link> */}
                  </div>

                  {/* <div className="app-social-block my-1 my-sm-3">
                    connectWith
                    <ul className="social-link">
                      <li>
                        <IconButton className="icon"
                                    onClick={() => {
                                      this.props.showAuthLoader();
                                      this.props.userFacebookSignIn();
                                    }}>
                          <i className="zmdi zmdi-facebook"/>
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                                    onClick={() => {
                                      this.props.showAuthLoader();
                                      this.props.userTwitterSignIn();
                                    }}>
                          <i className="zmdi zmdi-twitter"/>
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                                    onClick={() => {
                                      this.props.showAuthLoader();
                                      this.props.userGoogleSignIn();

                                    }}>
                          <i className="zmdi zmdi-google-plus"/>
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                                    onClick={() => {
                                      this.props.showAuthLoader();
                                      this.props.userGithubSignIn();
                                    }}>
                          <i className="zmdi zmdi-github"/>
                        </IconButton>
                      </li>
                    </ul>
                  </div> */}

                </fieldset>
              </form>
            </div>
          </div>

        </div>
        {
          loader &&
          <div className="loader-view">
            <CircularProgress/>
          </div>
        }
        {/* {showMessage && NotificationManager.error(alertMessage)} */}
        {/* <NotificationContainer/> */}
      </div>
      </div>
    );
  }
}



export default SignIn;