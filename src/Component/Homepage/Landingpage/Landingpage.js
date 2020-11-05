import React, { Component } from 'react';
import Style from "./Landingpage.module.css"
import Typography from '@material-ui/core/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default class Landingpage extends Component {
    render() {
        return (
            <div>
                <Carousel autoPlay dynamicHeight infiniteLoop>
                    <div  >
                        <img src="./solar-power-plant.jpg" />
                    </div>
                    <div>
                        <img src="./floating-solar-plant.jpg"/>
                    </div>
                    <div>
                        <img src="./mountain-solar-plant.jpg"/>
                    </div>
                </Carousel>
                <div  className={Style.section_center}>
                    <div>
                        <Typography variant="h3">Locate Your All Assest at one place</Typography>
                    </div>
                    <div className={Style.grid_arrng}>
                        <div className={Style.img_para}>
                            <img src="./solar-inverter.png"></img>
                            <Typography variant="h5">Solar Inverter</Typography>
                            <Typography variant="body2">We can locate any where of your solar inverter</Typography>
                        </div>
                        <div className={Style.img_para}>
                            <img src="./solar-string.png"></img>
                            <Typography variant="h5">Solar Inverter</Typography>
                            <Typography variant="body2">We can locate any where of your solar inverter</Typography>
                        </div>
                        <div className={Style.img_para}>
                            <img src="./temperature.png"></img>
                            <Typography variant="h5">Solar Inverter</Typography>
                            <Typography variant="body2">We can locate any where of your solar inverter</Typography>
                        </div>
                        <div className={Style.img_para}>
                            <img src="./electric-meter-1.png"></img>
                            <Typography variant="h5">Solar Inverter</Typography>
                            <Typography variant="body2">We can locate any where of your solar inverter</Typography>
                        </div>
                        <div className={Style.img_para}>
                            <img src="./Selection_001.png"></img>
                            <Typography variant="h5">Solar Inverter</Typography>
                            <Typography variant="body2">We can locate any where of your solar inverter</Typography>
                        </div>
                        <div className={Style.img_para}>
                            <img src="./waterpump.png"></img>
                            <Typography variant="h5">Solar Inverter</Typography>
                            <Typography variant="body2">We can locate any where of your solar inverter</Typography>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
