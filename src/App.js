import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import Landingpage from './Component/Homepage/Landingpage/Landingpage';
import Navapp from './Component/Navbar_f/Navapp'
import Login from './Component/Loginpage/Login'
import Singup from './Component/Singuppage/Singup'
import Login_landingpage from './Component/Homepage/Login_landingpage/Login_landingpage'
import Dashbord from './Component/Userdashbord/Dashbord';





export default class App extends Component {
  render() {
    return (
      <div>
        <Navapp/>
        <Route path ="/" exact component={Dashbord}></Route> 
        {/* <Route path ="/" exact component={Landingpage}></Route>  */}
        <Route path ="/Login" component={Login}></Route>
        <Route path ="/Singup" component={Singup}></Route>
        {/* <Login_landingpage/> */}
        
      </div>
    )
  }
}
