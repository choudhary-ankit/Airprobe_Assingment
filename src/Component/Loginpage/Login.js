import React, { Component } from 'react';
import Style from './Login.module.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export default class Login extends Component {
    render() {
        return (
            <div className={Style.body}>
                <Card className={Style.card}>
                    <div>
                        <div className={Style.login_div}>
                            <Typography variant="h4" component="h4" className={Style.login_btn}>Login</Typography>
                        </div>
                        <div className={Style.input_group}>
                            <input type="email" className={Style.input_field} placeholder="Email id"></input>
                            <input type="password" className={Style.input_field} placeholder="Password"></input>
                            <button className={Style.submit_btn}>Sign In</button>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
