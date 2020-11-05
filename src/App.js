import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import Landingpage from './Component/Homepage/Landingpage/Landingpage';
import Navapp from './Component/Navbar_f/Navapp'
import Login from './Component/Loginpage/Login'
import Singup from './Component/Singuppage/Singup'





export default class App extends Component {
  render() {
    return (
      <div>
        <Navapp/>
        <Route path ="/" exact component={Landingpage}></Route> 
        <Route path ="/Login" component={Login}></Route>
        <Route path ="/Singup" component={Singup}></Route>
      </div>
    )
  }
}
