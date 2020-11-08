import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import Landingpage from './Component/Homepage/Landingpage/Landingpage';
import Navapp from './Component/Navbarapp/Navapp'
import Login from './Component/Loginpage/Login'
import Singup from './Component/Singuppage/Singup'
import Login_landingpage from './Component/Homepage/Login_landingpage/Login_landingpage'
import Dashbord from './Component/Userdashbord/Dashbord';





export default class App extends Component {
  render() {
    return (
      <div>
        <Navapp/>
        <Route path ="/" exact component={Landingpage}></Route> 
        <Route path ="/login" component={Login}></Route>
        <Route path ="/singup" component={Singup}></Route>
        <Route path= "/tryout" component={Login_landingpage}></Route>
        <Route path ="/dashbord" exact component={Dashbord}></Route> 
      </div>
    )
  }
}
