import React, { Component, setContext } from "react";
import Home from "./components/Home/home";
import jwtDecode from "jwt-decode";
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
import auth from "./components/Auth/authService";
import Header from "./components/common/Header";

const App = (props) => {
  if (!localStorage.getItem("token") == "") {
    let token = localStorage.getItem("token");
    const { exp } = jwtDecode(token);
    // const { iat } = jwtDecode(token);
    // console.log(exp);
    // console.log(iat);
    // const Time = exp - 1140000;
    // console.log(Time);
    // let currentTime = Math.floor(Date.now() / 1000);
    // console.log(currentTime);
    console.log(exp);
    const expirationTime = exp * 1000 - 60000;
    console.log(expirationTime);
    console.log(Date.now());
    if (Date.now() >= expirationTime) {
      localStorage.clear();
      alert("You have been logged out");
      window.location = "/signin";
      // props.history.push("/signin");
      //<Redirect to="/signin" />;
    } else {
      return (
        // you can set your headers directly here based on the old token

        <React.Fragment>
          <ToastContainer />
          <Switch>
            <Route path="/home" render={(props) => <Home {...props} />} />

            {/* {!localStorage.getItem("token") == "" && ( */}
            <>
              <Route path="/recipe" component={Lists} />
              <Route path="/listpage" component={ListPage} />
              <Route path="/recipes/:id" component={Recipe} />
              <Route path="/posts/:id" component={Chef} />
              <Route path="/signup" component={Signup} />
              <Route path="/forget" component={ForgotPassword} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/logout" component={Logout} />
            </>
            {/* )} */}
          </Switch>
        </React.Fragment>
      );
    }
  } else {
    return (
      <>
        <Route path="/signin" render={(props) => <LoginForm {...props} />} />
        <Redirect from="/" exact to="/signin" />
      </>
    );
  }
};
export default App;
