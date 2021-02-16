import React, { Component } from "react";
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CalculatePrice from './CalculatePrice'
import Dialog from './Components/auth/Dialog'


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
  handleDiscount = (data) => {
    console.log(data);
    this.setState({
      price: data.price,
      weight: data.weight,
      total: data.total
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
                <Home {...props} 
                  handleData={this.handleData} 
                  loggedin={this.state.loggedIn} />
              )} />
            <Route
              exact
              path={"/calculatePrice"}
              render={props => (
                <CalculatePrice {...props}
                handleDiscount={this.handleDiscount}
                  loggedin={this.state.loggedIn}
                  role={this.state.role} />
              )} />
            <Route
              exact
              path={"/dialog"}
              render={props => (
                <Dialog {...props}                
                price={this.state.price}
                weight={this.state.weight}
                total={this.state.total}  />
              )} />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
