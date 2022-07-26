import React, { Component } from "react";
import Home from "./components/Home/home";
import { Switch, Route, Redirect } from "react-router-dom";
import ListPage from "./components/Blog_List/listPage";
import Lists from "./components/Recipe_List/Lists";
import Contact from "./components/Contact/Contact";
import About from "./components/AboutUs/About";
import Chef from "./components/Blog_Post/Chef";
import Recipe from "./components/recipe/Recipe";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/recipe" component={Lists} />
          <Route path="/listpage" component={ListPage} />
          <Route path="/recipes/:id" component={Recipe} />
          <Route path="/posts/:id" component={Chef} />
          {/* <Route path="/posts" render={(props) => <Posts {...props} />} /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
