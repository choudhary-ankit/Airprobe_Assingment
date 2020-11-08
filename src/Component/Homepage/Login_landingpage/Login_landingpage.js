import React, { Component } from 'react'
import Style from './Login_landingpage.module.css'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

export class MapContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            marker:false,
            lat:12.8947913,
            lng:77.6054581,
            zoom:15,
            minz:15,
            maxz:16,
            open:false,
            LoginCoupon:null,
        }
    }
    componentDidMount=()=>{
        var user = localStorage.getItem('loggedInUser');
        this.setState({
            LoginCoupon:user
        })
    }
    marker=()=>{
        if(this.state.zoom===15){
            this.setState({
                minz:21,
                zoom:21,
                maxz:22,
                
            })
            
        }
        else if(this.state.marker===false){
            this.setState({
                marker:true
            })
        }
        else if(this.state.marker===true){
            this.setState({
                marker:false
            })
        }
        

    }
    handleOpen=()=>{
        this.setState({
            open:true
        })
    }
    handleClose=()=>{
        this.setState({
            open:false
        })
    }
  render() {
      console.log(this.state.marker)
    return (
        <div className={Style.body}>
            {
                this.state.LoginCoupon==='Abxhdgfanh'?
                <div>
                    <Map
                        styles={{width:"100%", height:"100%"}}
                        google={this.props.google}
                        minZoom={this.state.minz}
                        zoom={this.state.zoom}
                        maxZoom={this.state.maxz}
                        initialCenter={
                        {
                            lat:this.state.lat,
                            lng: this.state.lng
                        }
                        }onZoomChanged={this.marker}>
                        <Marker
                            draggable={true}
                            visible={this.state.marker}
                            name={'India'}
                            position={{lat: this.state.lat, lng: this.state.lng}} 
                            onClick={this.handleOpen}
                            >
                        </Marker >
                    </Map>
                    <Modal
                        className={Style.modal_size}
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div className={Style.modal_body}>
                            <div>
                                <img src="./airprobe.png" className={Style.img} alt="airprobe logo"></img>
                            </div>
                            <div>
                                <Typography variant="body2">AirProbe team carries 35+ years of cumulative experience in Solar PV industry with a mission of developing technologies to improve the performance of Solar PV assets.</Typography>
                            </div>
                        </div>
                    </Modal>
                </div>
                :
                <div className={Style.notauthorize}>
                    <Typography variant="h4">***You are not authorized to access this page, plz login in your account</Typography>
                </div>
            }
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCIKkhVF5OFwH5Ek-LY3vn0P33nf5G755I")
})(MapContainer)