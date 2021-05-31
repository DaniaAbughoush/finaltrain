import React, { Component } from 'react';
import { BrowserRouter, Switch,Route} from "react-router-dom";
import Main from "./components/Main";
import Favariot from "./components/Favariot";
import Header from "./components/Header";


import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {
  render() {
    return (
      <div>
       <BrowserRouter>
       <Header/>
       <Switch>
         <Route exact path='/'>
<Main/>
         </Route>
         <Route exact path='/favariot'>
<Favariot/>
         </Route>
       </Switch>
       </BrowserRouter>
      </div>
    )
  }
}

export default App

