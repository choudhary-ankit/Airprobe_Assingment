import React, { Component } from 'react';
import Style from './Singup.module.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import firebase from '../../Firebase'

require('firebase/auth')

export default class Singup extends Component {
    constructor(props){
        super(props)
        this.state={
            UserName:'',
            UserEmail:'',
            UserPass:'',
            message:'',
            loader:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    singup=()=>{
        this.setState({
            loader:true
        })
        if(this.state.UserName.length>2){
            firebase.auth().createUserWithEmailAndPassword(this.state.UserEmail, this.state.UserPass)
            .then(()=>{
                var user = firebase.auth().currentUser;
                var d = new Date();
                var date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
                var time = d.getHours() + ":" + d.getMinutes();
                window.localStorage.setItem('UserUID', user.uid)
                window.localStorage.setItem('loggedInUser', 'Abxhdgfanh')
                firebase.firestore().collection('userinfo').doc(user.uid).set({
                    UserName:this.state.UserName,
                    UserDate:date,
                    UserTime:time,
                    LoginCount:1
                })
                setTimeout(() => {
                    window.location.replace("/tryout")
                    this.setState({loader:false})
                }, 5000);
            })
            .catch((error)=>{
                let errormsg=error.message
                this.setState({
                    
                    message:errormsg
                })
            }) 
            
        }
        else{
            this.setState({
                message:"Your name is less then 3 char"
            })
        }  
        
    }
    render() {
        return (
            <div className={Style.body}>
                <Card className={Style.card}>
                    <div>
                        <div className={Style.login_div}>
                            <Typography variant="h5" component="h4" className={Style.login_btn}>Singup</Typography>
                        </div>
                        <div className={Style.error_msg}>
                            <Typography variant="body2" style={{color:"red"}}>{this.state.message}</Typography>
                        </div>
                        <div className={Style.input_group}>
                            <input type="text" className={Style.input_field} name="UserName" placeholder="Full Name" onChange={this.handleChange}></input>
                            <input type="email" className={Style.input_field} name="UserEmail" placeholder="Email id" onChange={this.handleChange}></input>
                            <input type="password" className={Style.input_field} name="UserPass" placeholder="Password" onChange={this.handleChange}></input>
                            <button className={Style.submit_btn} onClick={this.singup}>
                                {
                                    this.state.loader ? 
                                        <CircularProgress color="inherit" style={{width:"25px", height:"25px"}}/>
                                    : 
                                        "Register"
                                }
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}