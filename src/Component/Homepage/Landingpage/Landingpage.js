import React, { Component } from 'react';
import Style from "./Landingpage.module.css"
import Typography from '@material-ui/core/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default class Landingpage extends Component {
    render() {
        return (
            <div className={Style.body}>
                <Carousel autoPlay dynamicHeight infiniteLoop>
                    <div  >
                        <img src="./solar-power-plant.jpg" alt="solar img"/>
                    </div>
                    <div>
                        <img src="./floating-solar-plant.jpg" alt="solar img"/>
                    </div>
                    <div>
                        <img src="./mountain-solar-plant.jpg" alt="solar img"/>
                    </div>
                </Carousel>
                <div  className={Style.section_center}>
                    <div className={Style.heading}>
                        <Typography variant="h4">Locate Your All Assest at one place</Typography>
                    </div>
                    <div className={Style.grid_arrng}>
                        <div className={Style.img_para}>
                            <img src="./solar-inverter.png" alt="solar inverter"></img>
                            <Typography variant="h5">Solar Inverter</Typography>
                            <Typography variant="body2">Collect data from solar inverters &<br/> MPPT strings to give accurate insights <br/>into your plant’s performance</Typography>
                        </div>
                        <div className={Style.img_para}>
                            <img src="./solar-string.png" alt="solar string"></img>
                            <Typography variant="h5">Solar pv string</Typography>
                            <Typography variant="body2">Get detailed insights in solar PV<br/> system by monitoring each string<br/> & identify anomaly instantly<br/> at the right place</Typography>
                        </div>
                        <div className={Style.img_para}>
                            <img src="./temperature.png" alt="solar weather"></img>
                            <Typography variant="h5">Weather Station</Typography>
                            <Typography variant="body2">Keep track of weather conditions<br/> at your plant location to understand<br/> or predict generation loss & get <br/>instant alerts</Typography>
                        </div>
                        <div className={Style.img_para}>
                            <img src="./electric-meter-1.png" alt="Electric meter"></img>
                            <Typography variant="h5">Energy Meter</Typography>
                            <Typography variant="body2">Monitor energy meters to make<br/> sure energy transfer happens with<br/> minimum losses, else, identify anomalies instantly</Typography>
                        </div>
                        <div className={Style.img_para}>
                            <img src="./generator.png" alt="DG Sync"></img>
                            <Typography variant="h5">DG Sync</Typography>
                            <Typography variant="body2">Synchronise your solar systems with<br/> existing DG sets locally to derive the <br/>maximum benefit</Typography>
                        </div>
                        <div className={Style.img_para}>
                            <img src="./waterpump.png" alt="solar pump"></img>
                            <Typography variant="h5">Solar Pump</Typography>
                            <Typography variant="body2">Know your pump’s runtime & be aware <br/>about overuse & misuse. Keep track of<br/> performance & get timely alerts</Typography>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
