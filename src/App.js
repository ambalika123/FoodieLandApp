import React, { Component } from "react";
import Home from "./components/Home/home";
import { Switch, Route, Redirect } from "react-router-dom";
import ListPage from "./components/Blog_List/listPage";
import Recipe from "./components/recipe/Recipe";
import Posts from "./components/Blog_Post/Posts";
import Contact from "./components/Contact/Contact";
import About from "./components/AboutUs/About";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/recipe" component={Recipe} />
          <Route path="/listpage" component={ListPage} />
          <Route path="/posts" component={Posts} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
