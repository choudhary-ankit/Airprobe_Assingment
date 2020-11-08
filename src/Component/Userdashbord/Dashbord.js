import React, { Component } from 'react';
import Style from './Dashbord.module.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
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
            UserUID:null,
        }
    }
    componentDidMount=()=>{
        // var user=firebase.auth().currentUser;
        var user = localStorage.getItem('UserUID');
        if(user){
            this.setState({UserUID:user})
            var ref=firebase.firestore().collection('userinfo').doc(user);
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
        else{
            this.setState({UserUID:null})
        }
    }
    render() {
        return (
        <div className={Style.body}>
            {
                this.state.UserUID!=null?
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
                :
                <div>
                    <Card className={Style.card}>
                        <div className={Style.notauthorize}>
                            <Typography variant="h5" component="h2">***You are not authorized to access this page, plz login in your account</Typography>
                        </div>
                    </Card>
                </div>
            }
        </div>
        )
    }
}
