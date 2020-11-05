import React, { Component } from 'react';
import Style from './Navapp.module.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';



export default class Navapp extends Component {
    render() {
        return (
            <div>
                <AppBar position="fixed" style={{background:"linear-gradient(to right, #ff105f, #ffad06)"}}>
                    <Toolbar className={Style.text_arrng}>
                        <div>
                            <Typography variant="p" component="h1">Airprobe</Typography>
                        </div>
                        <div className={Style.route_arrng}>
                            <Link to="/" style={{textDecoration:"none", color:"white"}}>
                                <Typography variant="p" component="h4">Home</Typography>
                                {/* <Button color="inherit">Home</Button> */}
                            </Link> 
                            <Link to="/Login" style={{textDecoration:"none", color:"white"}}>
                                <Typography variant="p" component="h4">Sing In</Typography>
                                {/* <Button color="inherit">Login</Button> */}
                            </Link> 
                            <Link to="/Singup" style={{textDecoration:"none", color:"white"}}>
                                {/* <Button color="inherit">SingUp</Button> */}
                                <Typography variant="p" component="h4">Sing Up</Typography>
                            </Link>
                        </div>
                        {/* <div>
                            <Link to="/DashBoard" style={{textDecoration:"none", color:"black"}}>
                                <Button color="inherit">DashBoard</Button>
                            </Link> 
                            <Link to="/Logout" style={{textDecoration:"none", color:"black"}}>
                                <Button color="inherit">Login/SingUp</Button>
                            </Link>
                        </div> */}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
