import React, { Component } from 'react'
import Style from './Login_landingpage.module.css'
import {Map, InfoWindow, Marker, GoogleApiWrapper, google} from 'google-maps-react';
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
            color:"yellow"
        }
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
        else if(this.state.marker==true){
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
                    // icon={{
                    //    fillColor : "#fff",
                    //    strokeColor:"black"
                    // }}
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
                        <img src="./airprobe.png"></img>
                    </div>
                    <div>
                        <Typography variant="body2">AirProbe team carries 35+ years of cumulative experience in Solar PV industry with a mission of developing technologies to improve the performance of Solar PV assets.</Typography>
                    </div>
                </div>
            </Modal>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCIKkhVF5OFwH5Ek-LY3vn0P33nf5G755I")
})(MapContainer)