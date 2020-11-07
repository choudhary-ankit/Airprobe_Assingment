import React, { Component } from 'react';
import Style from './Dashbord.module.css';
import Card from '@material-ui/core/Card';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import firebase from '../../Firebase'
require('firebase/auth')
export default class Dashbord extends Component {
    constructor(props){
        super(props)
        this.state={
            UserName:'',
            UserDate:'',
            UserTime:'',
            UserCount:'',
        }
    }
    componentDidMount=()=>{
        var user=firebase.auth().currentUser;
        var ref=firebase.firestore().collection('userinfo').doc(user.uid);
        ref.get().then((doc)=>{
            if(doc.exists){
                let userdata=doc.data()
                this.setState({
                    UserName:userdata.UserName,
                    UserDate:userdata.UserDate,
                    UserTime:userdata.UserTime,
                    UserCount:userdata.LoginCount,
                })
            }
        })
    }
    render() {
        return (
        <div className={Style.body}>
            <Card className={Style.card}>
                <div>
                    <div className={Style.login_div}>
                        <div className={Style.login_btn}>
                            <AccountCircleIcon style={{width:"100px", height:"100px",position:"absolute"}}/>
                        </div>
                    </div>
                    <div className={Style.input_group}>
                        <input type="text" className={Style.input_field} value={`User Name:- ${this.state.UserName}`} readOnly></input>
                        <input type="text" className={Style.input_field} value={`User Registration Date:- ${this.state.UserDate}`} readOnly></input>
                        <input type="text" className={Style.input_field} value={`User Registration Time:- ${this.state.UserTime}`} readOnly></input>
                        <input type="text" className={Style.input_field} value={`User Login Count:- ${this.state.UserCount}`} readOnly></input>
                    </div>
                </div>
            </Card>
        </div>
        )
    }
}
