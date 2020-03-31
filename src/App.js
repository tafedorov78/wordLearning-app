import React from 'react';
import {Switch, Route} from "react-router-dom";

import './App.css';
import Layout from './hoc/layout/Layout'
import QueryPresenter from "./components/queryPresenter/QueryPresenter";
import Login from "./components/user/LogIn";
import Register from "./components/user/Register";
import Sections from "./components/user/Sections";
import ServerController from "./server/ServerController";


class App extends React.Component {


  componentDidMount() {
    App.serverController = new ServerController()

  }

  render () {
    return (
      <Layout>
        <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/sections" component={Sections}/>
          <Route path="/play" component={QueryPresenter}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;
