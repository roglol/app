// /client/App.js
import React, { Component } from "react";
import "./App.css";
import "./containers/_login.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import Form from './components/Form';
// import Info from './components/Info';
import Burger from "./components/Burger/Burger";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Founder from "./components/Founder/Founder";
import OurTeam from "./components/OurTeam/OurTeam";
import Technologies from "./components/Technologies/Technologies";
import Comparasion from "./components/Comparasion/Comparasion";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Nav from './components/Nav/Nav';
// import Admin from './components/Admin/Admin';
import SignIn from "./containers/Signin";
import Startup from './components/Startup/Startup';

// using require
// const MuiTreeView = require('material-ui-treeview').default;
import WhyGeorgia from "./components/WhyGeorgia/WhyGeorgia";
// import Footer from './components/Footer/Footer'

class App extends Component {
  // initialize our state
  state = {
    burgerMenu: false
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {}
  handleBurgerMenu = () => {
    let burgerMenu = this.state.burgerMenu;
    this.setState({ burgerMenu: !burgerMenu });
    console.log("vaime");
  };

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {}

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base

  // our put method that uses our backend api
  // to create new query into our data base

  // our delete method that uses our backend api
  // to remove existing database information

  // our update method that uses our backend api
  // to overwrite existing data base information

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    // const { data } = this.state;
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/admin" component={SignIn} />
            
            <Route
              path="/"
              exact
              component={() => {
                return (
                  <>
                    {this.state.burgerMenu ? (
                      <Burger click={this.handleBurgerMenu} />
                    ) : (
                      <>
                        <Navigation click={this.handleBurgerMenu} />
                        <Main />
                        <Founder />
                        <OurTeam />
                        <Technologies />
                        <WhyGeorgia />
                        <Comparasion />
                        <Clients />
                        <Footer />
                      </>
                    )}
                  </>
                );
              }}
            />
            <Route
              path="/submit"
              component={() => {
                return (
                  <>
                    {this.state.burgerMenu ? (
                      <Burger click={this.handleBurgerMenu} />
                    ) : (
                      <>
                        <Nav click={this.handleBurgerMenu} />
                        <Startup />
                      </>
                    )}
                  </>
                );
              }}
            />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
