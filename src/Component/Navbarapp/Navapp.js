import React, { Component } from 'react';
import Style from './Navapp.module.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';

export default class Navapp extends Component {
    constructor(props){
        super(props)
        this.state={
            LoginCoupon:null,
            open_drawer:false,
        }
    }
    componentDidMount=()=>{
        var user = localStorage.getItem('loggedInUser');
        this.setState({
            LoginCoupon:user
        })
    }
    logOut=()=>{
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('UserUID')
        window.location.replace("/")
    }
    drawerOpen=()=>{
        this.setState({
            open_drawer:true
        })
    }
    drawerClose=()=>{
        this.setState({
            open_drawer:false
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <AppBar position="fixed" style={{background:"linear-gradient(to right, #ff105f, #ffad06)"}}>
                    <Toolbar className={Style.text_arrng}>
                        <div>
                            <Link to="/" style={{textDecoration:"none", color:"white"}}>           
                                <Typography variant="p" component="h1">Airprobe</Typography>
                            </Link> 
                        </div>
                        <div className={Style.fullscreen_display}>
                            {
                            this.state.LoginCoupon===null?
                                <div className={Style.signin_singup}>
                                    <Link to="/login" style={{textDecoration:"none", color:"white"}}>
                                        <Typography variant="p" component="h4">Sing In</Typography>
                                    </Link> 
                                    <Link to="/singup" style={{textDecoration:"none", color:"white"}}>
                                        <Typography variant="p" component="h4">Sing Up</Typography>
                                    </Link>
                                </div>
                            :
                                <div className={Style.route_arrng}>
                                    <Link to="/tryout" style={{textDecoration:"none", color:"white"}}>
                                        <Typography variant="p" component="h4">Tryout</Typography>
                                    </Link> 
                                    <Link to="/dashBord" style={{textDecoration:"none", color:"white"}}>
                                    <Typography variant="p" component="h4">Dashboard</Typography>
                                    </Link>
                                    <Button size="small" onClick={this.logOut} style={{color:"white", fontWeight:"bolder"}}>Logout</Button>

                                </div>
                            }
                        </div>
                        <div className={Style.small_display}>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.drawerOpen}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                variant="persistent"
                                anchor="top"
                                open={this.state.open_drawer}
                                className={Style.drawer_paper}>
                                <div>
                                    {
                                    this.state.LoginCoupon===null?
                                        <div className={Style.menu_arrng}>
                                            <div className={Style.signin_singup}>
                                                <Link to="/login" style={{textDecoration:"none", color:"white"}}>
                                                    <Typography variant="p" component="h4">Sing In</Typography>
                                                </Link> 
                                                <Link to="/singup" style={{textDecoration:"none", color:"white"}}>
                                                    <Typography variant="p" component="h4">Sing Up</Typography>
                                                </Link>
                                            </div>
                                            <div>
                                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.drawerClose}>
                                                    <CloseIcon  />
                                                </IconButton>
                                            </div>
                                        </div>
                                    :
                                        <div className={Style.menu_arrng}>
                                            <div className={Style.route_arrng}>
                                                <Link to="/tryout" style={{textDecoration:"none", color:"white"}}>
                                                    <Typography variant="p" component="h4">Tryout</Typography>
                                                </Link> 
                                                <Link to="/dashBord" style={{textDecoration:"none", color:"white"}}>
                                                <Typography variant="p" component="h4">Dashboard</Typography>
                                                </Link> 
                                                <Button size="small" onClick={this.logOut} style={{color:"white", fontWeight:"bolder"}}>Logout</Button>
                                            </div>
                                            <div>
                                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.drawerClose}>
                                                    <CloseIcon  />
                                                </IconButton>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </Drawer>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
