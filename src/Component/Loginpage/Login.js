import React, { Component } from 'react';
import Style from './Login.module.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import firebase from '../../Firebase'
require('firebase/auth')

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            UserEmail:'',
            UserPass:'',
            Count:0,
            message:'',
            loader:false,
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login=()=>{
        this.setState({
            loader:true
        })
        firebase.auth().signInWithEmailAndPassword(this.state.UserEmail, this.state.UserPass)
        .then(()=>{
            var user=firebase.auth().currentUser;
            var ref=firebase.firestore().collection('userinfo').doc(user.uid)
            ref.get().then((doc)=>{
                if(doc.exists){
                    let userdata=doc.data()
                    var count=(Number(userdata.LoginCount)+1)
                    firebase.firestore().collection('userinfo').doc(user.uid).set({
                        UserName:userdata.UserName,
                        UserDate:userdata.UserDate,
                        UserTime:userdata.UserTime,
                        LoginCount:count
                    })
                    setTimeout(() => {
                        window.location.replace("/tryout")
                        this.setState({loader:false})
                    }, 3000);
                }
            })
            window.localStorage.setItem('loggedInUser', 'Abxhdgfanh')
            window.localStorage.setItem('UserUID', user.uid)
        })
        .catch((error)=>{
            let errormsg=error.message
            this.setState({
                message:errormsg
            })
        })
        
    }
    render() {
        return (
            <div className={Style.body}>
                <Card className={Style.card}>
                    <div>
                        <div className={Style.login_div}>
                            <Typography variant="h4" component="h4" className={Style.login_btn}>Login</Typography>
                        </div>
                        <div className={Style.error_msg}>
                            <Typography variant="body2" style={{color:"red"}}>{this.state.message}</Typography>
                        </div>
                        <div className={Style.input_group}>
                            <input type="email" className={Style.input_field} placeholder="Email id" name="UserEmail" onChange={this.handleChange}></input>
                            <input type="password" className={Style.input_field} placeholder="Password" name="UserPass" onChange={this.handleChange}></input>
                            <button className={Style.submit_btn} onClick={this.login}>
                                {
                                    this.state.loader?
                                        <CircularProgress color="inherit" style={{width:"25px", height:"25px"}}/>
                                    :
                                        "Sign In"
                                    }
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
