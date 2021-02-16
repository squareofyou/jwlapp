import React, { Component } from "react";
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CalculatePrice from './CalculatePrice'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Role: "Normal",
      loggedIn: false
    }

  }

  handleData = (data) => {
    console.log(data);
    this.setState({
      loggedIn: data.loggedIn,
      role: data.role
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home {...props} handleData={this.handleData} loggedin={this.state.loggedIn} />
              )} />
            <Route
              exact
              path={"/calculatePrice"}
              render={props => (
                <CalculatePrice {...props}
                  loggedin={this.state.loggedIn}
                  role={this.state.role} />
              )} />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
