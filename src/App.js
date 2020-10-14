import React from 'react';
import "./App.css"
import {BrowserRouter,  Route, Switch} from 'react-router-dom'
import Signin from "./components/Signin"

const Routing = () => {
  
  return (
    <Switch>
        <Route exact path="/">
          <Signin />
        </Route>
      </Switch>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
