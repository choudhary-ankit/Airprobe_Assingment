import React, { Component } from 'react';
import Style from './Login.module.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import firebase from '../../Firebase'
require('firebase/auth')

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            UserEmail:'',
            UserPass:'',
            Count:0
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login=()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.UserEmail, this.state.UserPass)
        .then(()=>{
            alert("sign In")
        })
        .catch((error)=>{
            let errormsg=error.message
            alert(errormsg)
        })
        firebase.auth().onAuthStateChanged((user)=>{
            var ref=firebase.firestore().collection('userinfo').doc(user.uid)
            ref.get().then((doc)=>{
                if(doc.exists){
                    let userdata=doc.data()
                    var count=(Number(userdata.LoginCount)+1)
                    firebase.firestore().collection('userinfo').doc(user.uid).set({
                        LoginCount:count
                    })
                }
                else{
                    alert("no document")
                }
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
                        <div className={Style.input_group}>
                            <input type="email" className={Style.input_field} placeholder="Email id" name="UserEmail" onChange={this.handleChange}></input>
                            <input type="password" className={Style.input_field} placeholder="Password" name="UserPass" onChange={this.handleChange}></input>
                            <button className={Style.submit_btn} onClick={this.login}>Sign In</button>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
