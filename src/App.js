import React, { Component } from "react";
import Home from "./components/Home/home";
import { Switch, Route, Redirect } from "react-router-dom";
import ListPage from "./components/Blog_List/listPage";
import Lists from "./components/Recipe_List/Lists";
import Contact from "./components/Contact/Contact";
import About from "./components/AboutUs/About";
import Chef from "./components/Blog_Post/Chef";
import Recipe from "./components/recipe/Recipe";
//import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import ForgotPassword from "./components/Auth/ForgetPassword";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/Auth/loginForm";
import Logout from "./components/Auth/logout";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/home" component={Home} />
          <Route path="/recipe" component={Lists} />
          <Route path="/listpage" component={ListPage} />
          <Route path="/recipes/:id" component={Recipe} />
          <Route path="/posts/:id" component={Chef} />
          <Route path="/signin" component={LoginForm} />
          <Route path="/signup" component={Signup} />
          <Route path="/forget" component={ForgotPassword} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
